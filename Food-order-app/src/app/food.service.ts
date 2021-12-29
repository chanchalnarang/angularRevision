import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  dataArray:any=[];
  total:number=0;
url='https://recipes-8e515-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http:HttpClient) { }
  getItems(){
    return this.http.get(this.url);
  }
  addItem(data:any){
    return this.http.post('https://recipes-8e515-default-rtdb.firebaseio.com/recipes.json',{data:data});
  }
  sendItem(data:any,total:number){
    
    this.dataArray=[...data];
    this.total=total;
    console.log('service',this.dataArray,total)
  }
  getcartItems(){return this.dataArray}
  getTotal(){return this.total}
}
