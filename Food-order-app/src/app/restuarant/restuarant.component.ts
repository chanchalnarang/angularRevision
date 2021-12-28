import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hotels } from '../mock-data/resturants';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.css']
})
export class RestuarantComponent implements OnInit {
restuarants =hotels;
  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log(this.restuarants)
  }
  navigate(){this.route.navigateByUrl('/Menu')}

}
