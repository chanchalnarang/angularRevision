import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
username=new Subject();
name='';
constructor(private user:UsernameService) {  this.user.username.subscribe(((res:any)=>{this.name=res}))}

  ngOnInit(): void {
  }
changeValue($event:any){
this.user.username.next(this.name);
}
  inputValue($event:any){
    this.name=$event.target.value
  }
}
