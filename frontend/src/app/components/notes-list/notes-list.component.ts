import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadDemos();
  }

  loadDemos(): void {
    this.noteService.getAllNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  deleteDemo(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo demo?')) {
      this.noteService.deleteNote(id).subscribe(() => {
        this.loadDemos(); // Ricarica la lista dei demo
      });
    }
  }

  // Qui puoi aggiungere la logica per la modifica (ad esempio aprire un modulo di modifica)
  editDemo(id: number): void {
    // Logica per la modifica del demo
    console.log('Modifica demo con id', id);
  }

}
