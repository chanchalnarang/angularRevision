import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [ReactiveFormsModule,FormsModule,
    CommonModule,MatToolbarModule,MatIconModule,MatTabsModule,
  ],
  exports:[   DashboardComponent]
})
export class DashboardModule { }
