import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, OnInit,Input, Output } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartitems:any=[];
  total:any=[]
  constructor(private item:FoodService) { }

  ngOnInit(): void {
  this.cartitems=this.item.getcartItems();
  this.total=this.item.getTotal();
  console.log(this.cartitems)
  }

}
