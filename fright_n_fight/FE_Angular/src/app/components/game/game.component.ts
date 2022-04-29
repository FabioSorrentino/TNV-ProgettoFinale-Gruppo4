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
  timeLeft: number = 20;
  subscribeTimer: number | null = null;
  seconds : string |null = null;
  minutes : string |null = null;
  
  //Punteggio
  points: number | null = null;
  ptRemoved : number | null = 30;
  




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
    this.getMovie();
    this.countDownTimer();
   
     
    }

    onClickShowBudget(){
      this.showBudget = true;
      this.timeLeft = this.timeLeft + 30;

      this.ptRemoved = this.points; //Leva 30 punti dal punteggio finale

      console.log(this.points);
    }

    onClickShowVote(){
      this.showVote = true;
      this.timeLeft = this.timeLeft + 30;
      this.points = -10;
      console.log(this.points);
    }

    onClickShowTagLine(){
        
      this.points = -10;
      this.timeLeft = this.timeLeft + 30;
      
          //window.alert('No description!');
          return this.showTagLine = true;
      
    }

    onClickShowPopularity(){
      this.points = -10;
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
  
  

    getMovie(){

    this.movieId = this.getRandomInt(this.maxRandom);
    console.log(this.movieId);
    

    this.newMovieService.getMovieDetails(this.movieId).subscribe({
      next: (res)=> {
          this.movieDetails = res;
        
          if(this.movieDetails === null || this.movieDetails.poster_path === null) 
            this.getMovie();
      },  
      error: ()=> {
          
          this.getMovie(); 
        },
        });

    this.newMovieService.getMovieCredits(this.movieId).subscribe({
      next:(res)=>{
        this.movieCredits = res;

      }
    });
  }
  

  verifyResult(verifyForm: NgForm){
    if(this.movieDetails?.title.toLowerCase()===verifyForm.value.Title){
      this.finish = true;
      this.win = true;
        this.points = this.subscribeTimer;
        
      console.log("Hai indovinato!");
    }
    else{
      console.log("Ops...hai sbagliato :(");
    }
  }

  // metodo per fare una nuova partita
  playAgain(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["game"]);
  }

  save(){
    this.router.navigate(['/game', this.movieId, this.points]);
  }

}