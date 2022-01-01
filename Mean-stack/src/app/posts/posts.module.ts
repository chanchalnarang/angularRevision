import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostsComponent } from './create-posts/create-posts.component';



@NgModule({
  declarations: [
    CreatePostsComponent
  ],
  imports: [
    CommonModule
  ], exports: [CreatePostsComponent]
})
export class PostsModule { }
