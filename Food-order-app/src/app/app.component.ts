import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food-order-app';
  constructor(private route:Router){}
  navigate(){
   this.route.navigateByUrl('/restuarants')
  }
  showMenu(){
    this.route.navigateByUrl('/Menu');
  }
}
