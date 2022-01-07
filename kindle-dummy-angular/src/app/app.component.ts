import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kindle-dummy-angular';
  isLoggedin:string|null='false';
  constructor(private dialog:MatDialog){
  
  }
  ngOnInit(){
    
  }
  signUp(){
    let dialogConfig=new MatDialogConfig();
    this.dialog.open(SignUpFormComponent,dialogConfig)
  }
  login(){
  
    let dialogConfig=new MatDialogConfig();
    this.dialog.open(LoginComponent,dialogConfig)
  }
}
