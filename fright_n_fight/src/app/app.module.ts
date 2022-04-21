import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentiComponent } from './components/commenti/commenti.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentiComponent,
    DeleteCommentComponent,
    ListCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
