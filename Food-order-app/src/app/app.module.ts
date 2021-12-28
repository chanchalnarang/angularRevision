import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FoodItemsComponent } from './food-items/food-items.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { RestuarantComponent } from './restuarant/restuarant.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,FoodItemsComponent, CartComponent, RestuarantComponent
   
  ],
  imports: [HttpClientModule,ReactiveFormsModule,FormsModule,
    BrowserModule,DashboardModule,MatTabsModule,
    AppRoutingModule,RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
