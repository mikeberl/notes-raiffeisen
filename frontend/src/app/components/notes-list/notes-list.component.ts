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
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  deleteNote(id: number): void {
    if (confirm('Are you sure?')) {
      this.noteService.deleteNote(id).subscribe(() => {
        this.loadNotes();
      });
    }
  }

  editNote(id: number): void {
    console.log('TODO EDIT : ', id);
  }

}
