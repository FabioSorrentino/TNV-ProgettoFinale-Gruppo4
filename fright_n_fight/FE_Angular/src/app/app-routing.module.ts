import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentiComponent } from './components/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InsertRatingComponent } from './components/insert-rating/insert-rating.component';

const routes: Routes = [
    { path: '', component: NavigationComponent},
    { path: 'comments', component: CommentiComponent},
    { path: 'comments/list', component: ListCommentsComponent},
    { path: 'comments/delete/:commentId', component: DeleteCommentComponent},
    { path: 'rating', component: InsertRatingComponent},
    { path:'', redirectTo: '/', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }