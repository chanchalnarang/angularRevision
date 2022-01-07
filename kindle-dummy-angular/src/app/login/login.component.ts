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
  isLoggedin: string | null = 'false';
  ValidUsers: any = []
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private dialog: MatDialog, private http: HttpClient) {
    let url = 'https://jsonplaceholder.typicode.com/users';
    this.getUsers(url)

  }
  getUsers(url: string) {
    this.http.get(url).subscribe((res) => { this.ValidUsers = res; this.checkValidUser(this.ValidUsers) }, err => { console.log(err) })
  }
  ngOnInit(): void {

  }
  checkValidUser(users: any) {
    console.log(users);
    for (let user of users) {
      let emailinput= this.loginForm.controls.email.value;
      
      if (user.email ==emailinput) {
        localStorage.setItem('valid', 'true');
        return;
      }
      else { localStorage.setItem('valid', 'false'); }
    }

  }
  submit(event: any) {
    event.preventDefault();
    this.checkValidUser(this.ValidUsers)
    this.dialog.closeAll()
  }
}