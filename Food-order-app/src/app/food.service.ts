import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
url='https://recipes-8e515-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http:HttpClient) { }
  getItems(){
    return this.http.get(this.url);
  }
  addItem(data:any){
    return this.http.post('https://recipes-8e515-default-rtdb.firebaseio.com/recipes.json',{data:data});
  }
}
