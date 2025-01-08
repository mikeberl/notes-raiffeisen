import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})

export class NotesListComponent implements OnInit {

  notes: Note[] = [];
  filteredNotes: Note[] = [];
  searchTitle: string = '';

  collapsedNotes: { [key: number]: boolean } = {};

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();  
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe((notes) => {
      this.notes = notes;
      this.filteredNotes = notes;

      this.filteredNotes.forEach(note => {
        this.collapsedNotes[note.id] = true;
      });
    });
  }

  deleteNote(id: number): void {
    if (confirm('Are you sure you want to delete this note?')) {
      this.noteService.deleteNote(id).subscribe(() => {
        this.loadNotes();
      });
    }
  }

  editNote(id: number): void {
    console.log('TODO EDIT : ', id);
  }

  createNote(): void {
    console.log('TODO CREATE NOTE');
  }

  filterNotes(): void {
    this.filteredNotes = this.notes.filter((note) =>
      note.title.toLowerCase().includes(this.searchTitle.toLowerCase())
    );
  }

  toggleAccordion(noteId: number) {
    this.collapsedNotes[noteId] = !this.collapsedNotes[noteId];
  }
}
