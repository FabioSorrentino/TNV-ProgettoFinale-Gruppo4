import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentiComponent } from './components/commenti/commenti.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';

const routes: Routes = [
    { path: 'comments', component: CommentiComponent},
    { path: 'comments/list', component: ListCommentsComponent},
    { path: 'comments/delete/:commentId', component: DeleteCommentComponent},
    { path:'', redirectTo: '/', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }