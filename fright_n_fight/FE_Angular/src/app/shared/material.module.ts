import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { User } from '../models/user';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
