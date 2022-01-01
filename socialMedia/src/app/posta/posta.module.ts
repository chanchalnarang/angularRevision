import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePostsComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[ CreatePostsComponent]
})
export class PostaModule { }
