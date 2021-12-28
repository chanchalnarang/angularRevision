import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
Item:any;
Price:any;
recieps:any;
cartItems:any=[];
quantity:number=0;
itemForm=new FormGroup({
item:new FormControl(''),
  price:new FormControl('')
})
  constructor(private items:FoodService) {
    this.getData();
   }

  ngOnInit(): void {
    this.getData();
  }
async Add(event:Event){
  
  event.preventDefault();

await this.items.addItem({item:this.Item,price:this.Price}).subscribe((res:any)=>{this.recieps?.push({...res}); this.getData();},(err:any)=>{console.log(err)})


}
async getData(){
 await this.items.getItems().subscribe((res:any)=>{if(res){this.recieps=Object.values(res)}},(err:any)=>{console.log(err)})
}
setItem(event:any){
  this.Item=event.target.value;

}
getQuantity(event:any){
this.quantity=event.target.value
}
AddCart(el:any){
  this.cartItems.push({item:el.data.item,quantity:this.quantity});
  console.log(this.cartItems);
}

Increment(){
  this.quantity++;
 }
Decrement(){
  this.quantity--;
}
setPrice(event:any){
  this.Price=event.target.value;
}

}
