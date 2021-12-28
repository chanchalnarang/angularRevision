import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 @Input() cartitems:any=[];
 @Input() total:any=[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.cartitems)
  }

}
