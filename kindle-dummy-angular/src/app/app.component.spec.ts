import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule,MatDialogConfig } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent } from './dashboard/header/header.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay } from '@angular/cdk/overlay';
import { Inject } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async () => {
   let title = 'kindle-dummy-angular';
   Inject(MatDialog)
   Inject(Overlay)
   Inject(MatDialogConfig)
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,ReactiveFormsModule,FormsModule,
        AppRoutingModule,MatDialogModule,HttpClientModule,
        BrowserAnimationsModule,DashboardModule
      ],
      providers:[MatDialog,Overlay,MatDialogConfig],
      declarations: [
        AppComponent,HeaderComponent,BooksComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kindle-dummy-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kindle-dummy-angular');
  });

  
});
