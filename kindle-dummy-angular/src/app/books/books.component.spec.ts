import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books.component';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    Inject(HttpClient)
    await TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      imports:[MatDialogModule,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    Inject(HttpClient);
    Inject(MatDialog)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when user loggedin',()=>{
  const spy=  spyOn(component,'getBooks')
    component.isloggedIn='true';
    component.getBooks('https://jsonplaceholder.typicode.com/posts');
    expect(spy).toHaveBeenCalled();
    
  })
  it('response should be defined',()=>{
  const  mockget=()=>{return [{email:'a@b.com',password:'1234'}]}
      component.isloggedIn='true';
      component.getBooks('https://jsonplaceholder.typicode.com/posts');
     component.books= mockget();
      expect(mockget).toBeDefined();
      expect(component.books.length).toBeGreaterThan(0);
    
      

    })
    
});
