import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  url = 'https://jsonplaceholder.typicode.com/posts';
  isLogin: string | null = 'false'
  constructor(private http: HttpClient) {
   
  }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('valid');
    if (this.isLogin == 'true') { if(this.books.length===0){this.getBooks(this.url);}else{console.log(this.books,'ngOninit line19')} } else { this.books = [] }

  }
  getBooks(url: any) {

    this.http.get(url).subscribe(res => { this.books = res }, err => console.log(err))
    console.log(this.books)
  }
  ngAfterViewChecked(){
    console.log('ngoninit called again in line 28')
    this.ngOnInit()
  }
}
