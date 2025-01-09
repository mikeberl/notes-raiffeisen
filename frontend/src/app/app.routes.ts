import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

const routes: Routes = [
  { path: '', component: NotesListComponent }, // Componente principale con la lista delle note
  { path: 'edit/:id', component: EditNoteComponent }  // Rotta per la modifica della nota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}