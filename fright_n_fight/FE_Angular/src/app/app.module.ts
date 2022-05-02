import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentiComponent } from './components/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/get-comment/get-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertRatingComponent } from './components/insert-rating/insert-rating.component';
import { GetRatingComponent } from './components/get-rating/get-rating.component';
import { GetFavouriteMoviesComponent } from './components/get-favourite-movies/get-favourite-movies.component';
import { CreateFavouriteMovieComponent } from './components/create-favourite-movie/create-favourite-movie.component';
import { DeleteFavouriteMovieComponent } from './components/delete-favourite-movie/delete-favourite-movie.component';
import { SignupComponent } from './components/register/signup.component';
import { GetMovieDetailComponent } from './components/get-movie-detail/get-movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { GameComponent } from './components/game/game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './components/logout/logout.component'
import { HomeComponent } from './components/home/home.component';
import { AddCommentRatingComponent } from './components/add-comment-rating/add-comment-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentiComponent,
    DeleteCommentComponent,
    ListCommentsComponent,
    InsertRatingComponent,
    GetRatingComponent,
    GetFavouriteMoviesComponent,
    CreateFavouriteMovieComponent,
    DeleteFavouriteMovieComponent,
    LoginComponent,
    GetMovieDetailComponent,
    GameComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    AddCommentRatingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
