import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LoginComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule,MatDialogModule,HttpClientModule,
    BrowserAnimationsModule,DashboardModule
  ],
  exports:[SignUpFormComponent],
  providers: [MatDialog,Overlay,MatDialogConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
