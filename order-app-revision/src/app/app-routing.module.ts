import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';
import { HotelsListComponent } from './dashboard/hotels-list/hotels-list.component';
import { LoginComponent } from './dashboard/login/login.component';

const routes: Routes = [{path:'login',component:LoginComponent},

{path:'hotels',component:HotelsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
