import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'kindle-dummy-angular';
  isLoggedin:any='false';
  constructor(private dialog:MatDialog){
  
  }
  ngOnInit(){
    this.isLoggedin=localStorage.getItem('valid');   
  }
  signUp(){
    let dialogConfig=new MatDialogConfig();
    this.dialog.open(SignUpFormComponent,dialogConfig)
  }
  login(){
  
    let dialogConfig=new MatDialogConfig();
    this.dialog.open(LoginComponent,dialogConfig);
    this.isLoggedin=localStorage.getItem('valid');
  }
  ngAfterViewChecked(){
    this.isLoggedin=localStorage.getItem('valid');
  }
}
