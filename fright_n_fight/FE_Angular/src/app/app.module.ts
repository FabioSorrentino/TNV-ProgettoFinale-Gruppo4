import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentiComponent } from './components/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InsertRatingComponent } from './components/insert-rating/insert-rating.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentiComponent,
    DeleteCommentComponent,
    ListCommentsComponent,
    NavigationComponent,
    InsertRatingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
