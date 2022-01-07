import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

import { SignUpFormComponent } from 'src/app/sign-up-form/sign-up-form.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dailog:MatDialog) { }

  ngOnInit(): void {
  }
  openDailog(){
    const dialogConfig = new MatDialogConfig();
 
this.dailog.open(SignUpFormComponent,dialogConfig)
  }
}
