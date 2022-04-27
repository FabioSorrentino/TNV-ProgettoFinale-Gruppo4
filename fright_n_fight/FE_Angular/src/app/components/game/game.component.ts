import {Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { MovieCredits } from 'src/app/models/movieCredits';
import { MovieData } from 'src/app/models/movieData';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
 
  start: boolean = false;
  finish:boolean = false;
  win: boolean = false;

  // booleani usati per mostrare o meno info film
  showActors: boolean[] = [false,false,false];
  showGenres: boolean[] = [false,false]
  showDate: boolean = false;
  showButton: boolean = false;
  showDirector: boolean = false;

  // id film e massimo range del random
  movieId: number | null  = null;
  maxRandom: number = 5000;

  // info film
  movieDetails: MovieData| null = null;
  movieCredits: MovieCredits| null = null;


  // valori per calcolo countdown e minuti mostrati
  time: number = 30;
  amount: number = 30;
  subscribeTimer: number |null = null;
  seconds : string |null = null;
  minutes : string |null = null;
  

  points: number | null = 0;
  




  constructor(
    public newMovieService: MovieApiService,
    private router:Router
    ){ }

  ngOnInit(): void {
  }



   getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  
  increaseTimer() {
   this.countDownTimer();

  }
  
  
  clickEvent() {
    this.showButton = true;
  
  }
  
 
 // metodo che fa partire la partita
  onStart(){
    this.start = true;
    this.retirveMovie();
    this.countDownTimer();
    
     
    }
    
  
    countDownTimer() {
      const t = timer(1000, 1000); //Valore 1: dopo quanto compare - valore 2: intervallo (ms)

      //qua ad ogni 10 secondi mostra qualcosa, io non ne ho bisogno!
      //devo visualizzare il valore se l'utente lo vuole visualizzare
      const abc = t.subscribe(val => {
       
        if(this.subscribeTimer === 0) {
          this.finish = true;
          this.win = false;
           }

        if(this.win && this.finish) 
            return
              this.subscribeTimer = this.time - val,
              this.minutes = Math.floor(this.subscribeTimer % 3600 / 60).toString().padStart(2,'0'),
              this.seconds = Math.floor(this.subscribeTimer % 60).toString().padStart(2,'0')
        
        if (this.showButton)
           return
            this.subscribeTimer = this.time + this.amount,
            this.minutes = Math.floor(this.subscribeTimer % 3600 / 60).toString().padStart(2,'0'),
            this.seconds = Math.floor(this.subscribeTimer % 60).toString().padStart(2,'0')
        
      });
    }
  
  

    retirveMovie(){

    this.movieId = this.getRandomInt(this.maxRandom);

    this.newMovieService.getMovieDetails(this.movieId).subscribe({
      next: (res)=> {
        this.movieDetails = res;
        
        if(this.movieDetails === null || this.movieDetails.poster_path === null) this.retirveMovie();},  
      error: (res)=> {
          console.log(res);
          this.retirveMovie(); },
        });

    this.newMovieService.getMovieCredits(this.movieId).subscribe({
      next:(res)=>{
        this.movieCredits = res;
       
      }
    });
  }
  

  guess(guessForm: NgForm){
    if(this.movieDetails?.title.toLowerCase()===guessForm.value.guessTitle){
      this.win = true;
      this.finish = true;
      this.points = this.subscribeTimer;
    
      console.log("Hai indovinato!");
    }
    else{
      console.log("Ops...hai sbagliato :(");
    }
  }


}
