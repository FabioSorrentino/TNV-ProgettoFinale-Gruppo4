import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentiComponent } from './components/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/get-comment/get-comment.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InsertRatingComponent } from './components/insert-rating/insert-rating.component';
import { LoginComponent } from './components/login/login.component';
import { GetRatingComponent } from './components/get-rating/get-rating.component';

const routes: Routes = [
    { path: '', component: NavigationComponent},
    { path: 'comments', component: CommentiComponent},
    { path: 'comments/:movie_id', component: ListCommentsComponent},
    { path: 'comments/delete/:commentId', component: DeleteCommentComponent},
    { path: 'login', component: LoginComponent },
    { path: 'rating', component: InsertRatingComponent},
    { path: 'rating/:movie_id', component: GetRatingComponent},
    { path:'', redirectTo: '/', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }