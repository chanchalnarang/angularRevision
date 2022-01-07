import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectService {
valid=new Subject();
  constructor() { }
}
