import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  books: any;
  isLoggedin:string|null='false';
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private dialog: MatDialog, private http: HttpClient) { }
  setisLogin(res: any) {
 
    let userData: any = Object.values(res);
    for (let user of userData) {
      if (user.email == this.loginForm.controls.email.value) {
        console.log('user already exist');
        localStorage.setItem('isLogin', 'true');
     
       
console.log(this.books);
        return;
      }
      else {
        console.log('signup please');
        localStorage.setItem('isLogin', 'false');
        return;
      }

    }
  }
  submit(event: any) {
    event?.preventDefault();
    this.isLoggedin=localStorage.getItem('isLogin');
    let res = this.http.get('https://kindle-dummy-default-rtdb.firebaseio.com/registeredUsers.json');
    localStorage.setItem('isLogin','true');
    res.subscribe(data => { console.log(data); this.setisLogin(data) }, err => { console.log(err) })
  this.dialog.closeAll();
   



  }
 
  ngOnInit(): void {

  }

}
