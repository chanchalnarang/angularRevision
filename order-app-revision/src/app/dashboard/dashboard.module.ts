import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabLink, MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { userReducer } from 'reducers/userRducer';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    HotelsListComponent
  ],
  imports: [ReactiveFormsModule,AppRoutingModule,StoreModule.forRoot({user:userReducer}),
    CommonModule,MatToolbarModule,MatButtonModule, MatTabsModule,MatInputModule,BrowserAnimationsModule,MatFormFieldModule
  ],
  exports:[HeaderComponent,LoginComponent]
})
export class DashboardModule { }
