import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteService } from './services/note.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    BrowserAnimationsModule,
    FormsModule,
    NgbModalModule,
    
    RouterModule.forRoot([]),
],
  exports: [
    RouterModule
  ],
  providers:[
    provideHttpClient(),
    NoteService
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
