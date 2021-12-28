import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemsComponent } from './food-items/food-items.component';
import { RestuarantComponent } from './restuarant/restuarant.component';

const routes: Routes = [
  {path:'restuarants',component:RestuarantComponent, pathMatch: 'full',},
  {path:'Menu',component:FoodItemsComponent, pathMatch: 'full',},
  {path:'',component:RestuarantComponent, pathMatch: 'full',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
