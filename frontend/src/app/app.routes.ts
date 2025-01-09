import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'edit/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
