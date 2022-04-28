import {Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

import { MovieCredits } from 'src/app/models/movieCredits';
import { MovieData, Genre } from 'src/app/models/movieData';
import { MovieApiService } from 'src/app/service/movie-api.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  // booleani usati per mostrare o meno contenuto
  start: boolean = false;
  finish:boolean = false;
  win: boolean = false;

  // booleani usati per mostrare o meno info film
  showPopularity : boolean = false;
  showBudget : boolean = false;
  showTagLine : boolean = false;
  showVote : boolean = false;

  // id film e massimo range del random
  movieId: number | null  = null;
  maxRandom: number = 6000;

  // info film
  movieDetails: MovieData| null = null;
  movieCredits: MovieCredits| null = null;
  genres: Genre[] = [];


  // valori per calcolo conutdown e minuti mostrati
  timeLeft: number = 120;
  subscribeTimer: number |null = null;
  seconds : string |null = null;
  minutes : string |null = null;
  
  //Punteggio
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
  
 
 // metodo che fa partire la partita
  onStart(){
    this.start = true;
    this.retirveMovie();
    this.countDownTimer();
    
     
    }

    onClickShowBudget(){
      this.showBudget = true;
      this.timeLeft = this.timeLeft + 30;
    }

    onClickShowVote(){
      this.showVote = true;
      this.timeLeft = this.timeLeft + 30;
    }

    onClickShowTagLine(){
      this.showTagLine = true;
      this.timeLeft = this.timeLeft + 30;
    }

    onClickShowPopularity(){
      this.showPopularity = true;
      this.timeLeft = this.timeLeft + 30;
    }
    
    
  // metodo che crea il countdown e cambia valore ai cari campi per renderli visibili
    countDownTimer() {
      const source = timer(1000, 1000);
      const abc = source.subscribe(val => {
        
        if(this.subscribeTimer === 0) {
          this.finish = true;
          this.win = false;
          return }
        if(this.finish && this.win) return
        this.subscribeTimer = this.timeLeft - val,
        this.minutes = Math.floor(this.subscribeTimer % 3600 / 60).toString().padStart(2,'0'),
        this.seconds = Math.floor(this.subscribeTimer % 60).toString().padStart(2,'0')
        
        
      });
    }
  
  
  // metodo che recupera tutte le informazioni utili dall Api esterna e fa controli su presenza poster e gia giocati  
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
  
// Metodo per valutare l input sul tentativo titolo
  guess(guessForm: NgForm){
    if(this.movieDetails?.title.toLowerCase()===guessForm.value.guessTitle){
      this.finish = true;
      this.win = true;
      this.points = this.subscribeTimer;
            
      console.log("indovinato");
    }
    else{
      console.log("Sbagliato");
    }
  }

  // metodo per fare una nuova partita
  playAgain(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["gioco"])
  }

  save(){
    this.router.navigate(['/gioco', this.movieId, this.points]);
  }

}