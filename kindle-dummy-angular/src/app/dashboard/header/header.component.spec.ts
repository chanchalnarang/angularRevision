import { CommonModule } from '@angular/common';
import { inject, Inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignUpFormComponent } from 'src/app/sign-up-form/sign-up-form.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    Inject(MatDialog)
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[MatDialogModule, CommonModule,MatToolbarModule,MatInputModule,MatIconModule,MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('openDailog should be called',()=>{
    const spy=spyOn(component,'openDailog');
    component.openDailog();
    const dialogConfig=new MatDialogConfig();
    expect(spy).toHaveBeenCalled();
  });
  it('SignUp is clicked',()=>{
    let dialog:MatDialog;
    const spy=spyOn(component,'openDailog');
    // const button= fixture.debugElement.nativeElement.querySelector('.signUp');   
    // button.click();
    component.openDailog();
  
 
    
   
    expect(spy).toHaveBeenCalled();
  })
});
