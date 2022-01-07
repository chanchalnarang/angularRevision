import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
SignupForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  constructor(private dialog:MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
  }
  submit(event:any){
    event?.preventDefault
    console.log(this.SignupForm)
let newId=Math.random();
let emailId=this.SignupForm.controls.email.value;
let pwd=this.SignupForm.controls.password.value;
console.log(emailId,pwd)
    let url='https://kindle-dummy-default-rtdb.firebaseio.com/registeredUsers.json'
let user={id:newId,email:emailId ,password:pwd}
console.log(user);
this.http.post(url,user).subscribe(res=>{console.log(res)},err=>{console.log(err)});
    this.dialog.closeAll();

  
  }
}
