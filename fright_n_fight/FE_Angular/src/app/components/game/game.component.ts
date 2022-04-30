import {Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Subscriber } from 'rxjs';

import { MovieCredits } from 'src/app/models/movieCredits';
import { MovieData, Genre } from 'src/app/models/movieData';
import { MovieApiService } from 'src/app/service/movie-api.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  /*Mostrare o meno info film e aggiungere del tempo*/
  showPopularity : boolean = false;
  showBudget : boolean = false;
  showOrLanguage : boolean = false;
  showVote : boolean = false;
  showRuntime : boolean = false;

  /*Variabili per contatore*/
  subscribeTimer: number = 0;
  timeAdded : number = 0;
  seconds : string | null = null;
  minutes : string | null = null;
  stop : boolean = false;

  /*Recupero dei film da API esterna*/
  movieId: number | null  = null;
  maxRandom: number = 6000;

  /*Modello per recupero dati film*/
  movieSpecs: MovieData| null = null;
  movieCredits: MovieCredits| null = null;
  genres: Genre[] = [];

  /*Booleani di start e di fine gioco*/
  start: boolean = false;
  finish: boolean = false;

  /*Gestione punteggio giocatore*/
  points: number = 0;
  ptRemoved: number = 0;

  constructor(
    public newMovieService: MovieApiService,
    private router: Router
    ){ }

  ngOnInit(): void {
    }

  onStart(){
    this.start = true;
    this.getMovie();
    this.timer();
    }

    onClickShowRuntime() {
      this.showRuntime = true;
      this.timeAdded = this.timeAdded + 30;
    }

    onClickShowBudget(){
      this.showBudget = true;
      this.timeAdded = this.timeAdded + 30;
    }

    onClickShowVote(){
      this.showVote = true;
      this.timeAdded = this.timeAdded + 30;
    }

    onclickOrLanguage(){
      //window.alert('No description!');
      this.showOrLanguage = true;
      this.timeAdded = this.timeAdded + 30;
    }

    onClickShowPopularity(){
      this.showPopularity = true;
      this.timeAdded = this.timeAdded + 30;
    }

    onStop() {
      this.stop = true;
    }

    getRandomInt(max:number) {
      return Math.floor(Math.random()*max);
    }

    timer() {
        const source = interval(1000);
        
        const abc = source.subscribe(val => {  

          if(val === 25) this.ptRemoved = this.ptRemoved - 20;
          if(val === 45) this.ptRemoved = this.ptRemoved - 20;
          if(val === 55) this.ptRemoved = this.ptRemoved - 20;
          if(val === 75) this.ptRemoved = this.ptRemoved - 20;
          if(val === 85) this.ptRemoved = this.ptRemoved - 20;

          if(this.finish) return
          this.subscribeTimer = this.timeAdded + val,         
          this.minutes = Math.floor(this.subscribeTimer % 3600 / 60).toString().padStart(2,'0'),
          this.seconds = Math.floor(this.subscribeTimer % 60).toString().padStart(2,'0')
      });
    }
    
    verifyResult(verifyForm: NgForm){
        if(this.movieSpecs?.title.toLowerCase()===verifyForm.value.Title.toLowerCase()){
          this.finish = true;
          this.points = this.subscribeTimer;
          this.points = this.points + this.ptRemoved;
          console.log("Hai indovinato!");
        }
        else {
          console.log("Ops...hai sbagliato :(");
        }
    }

    getMovie(){
      this.movieId = this.getRandomInt(this.maxRandom);
      console.log(this.movieId);
  
      this.newMovieService.getMovieDetails(this.movieId).subscribe({
        next: (res)=> {
            this.movieSpecs = res;
            if(this.movieSpecs === null || 
              this.movieSpecs.poster_path === null ||
              this.movieSpecs.tagline === null || 
              this.movieCredits === null || 
              this.movieCredits?.cast === null || 
              this.movieCredits?.crew === null) 
            
                this.getMovie();
                    },  
        
        error: ()=> {
            this.getMovie(); 
        },
    });

  this.newMovieService.getMovieCredits(this.movieId).subscribe({
    next:(res)=>{ this.movieCredits = res;}
    });
  }
}