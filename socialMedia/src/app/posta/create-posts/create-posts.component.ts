import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  Posts:any=[];
createPost=new FormGroup({
  title:new FormControl(''),
  description:new FormControl('')
})
  constructor() { }

  ngOnInit(): void {
  }
submit(event:Event){
  event.preventDefault();
  let title=this.createPost.controls.title.value;
  let description=this.createPost.controls.description.value;
  this.Posts.push({postTitle:title,postDescription:description})
  console.log(this.Posts);
}
}
