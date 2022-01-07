import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from'@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatInputModule,MatIconModule,MatDialogModule
  ],
  exports:[HeaderComponent]
})
export class DashboardModule { }
