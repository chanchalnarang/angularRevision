import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm= new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
count:number=0;
  constructor(private store:Store<{count:{counter:number}}>) { }

  ngOnInit(): void { 
    this.store.select('count').subscribe(data=>{
      console.log(data);
      this.count=data.counter})
  }
 
  increment(){
   this.store.dispatch(increment())
  }
  decrement(){
  this.store.dispatch(decrement())
  }
  reset(){
  this.store.dispatch(reset())
  }
}
