import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  name='';
  constructor(private user:UsernameService) {
    this.user.username.subscribe((res:any)=>{this.name=res})
   }

  ngOnInit(): void {
  }
  changeValue($event:any){
    this.user.username.next(this.name)
  }
}
