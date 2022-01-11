import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginAction } from 'actions/users.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  login(event:any){
    event.preventDefault();
  this.store.dispatch({type:'Login',email:'sd@e.com',password:'123'}) 
  }
}
