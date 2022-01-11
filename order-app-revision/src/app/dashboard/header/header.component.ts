import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
login(event:any){
  console.log('clicked1');
this.route.navigateByUrl('/login')
}
hotels(event:any){
  console.log('clicked2');
  this.route.navigateByUrl('/hotels')
  }
}
