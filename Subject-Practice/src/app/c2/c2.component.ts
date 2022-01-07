import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
 
  name='';
  constructor(private user:UsernameService) {  this.user.username.subscribe(((res:any)=>{this.name=res}))}

  ngOnInit(): void {
  }
  changeValue(){
    console.log('clicked');
    this.user.username.next(this.name)
  }
    
    inputValue($event:any){
      this.name=$event.target.value
    }
}