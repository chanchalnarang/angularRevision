import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';
  isloggedIn:string|null='false';
  books:any=[];
  constructor(private http:HttpClient) { }
 
  ngOnInit(): void {
    this.getBooks(this.url)
    this.isloggedIn = localStorage.getItem('isLogin');
  }
  ngAfterViewChecked(){
    this.isloggedIn = localStorage.getItem('isLogin');
  }
  async getBooks(url: string) {
     this.isloggedIn = localStorage.getItem('isLogin');
    if (this.isloggedIn=='true') {
    await  this.http.get(url).subscribe(res => { this.books = res });
  
    }
  }
}
