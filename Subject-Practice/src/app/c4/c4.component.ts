import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  name='';
  constructor(private user:UsernameService) {
    this.user.username.subscribe((res:any)=>{this.name=res})
   }

  ngOnInit(): void {
  }
  changeValue($event:any){
    this.user.username.next(this.name);
  }
}
