import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  note: Note = {id: -1, title: '', text: ''};
  originalNote: Note = {id: -1, title: '', text: ''};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.noteService.getNoteById(id).subscribe({
        next: (note) => {
          if (!note) {
            this.router.navigate(['/']);
          } else {
            this.note = { ...note };
            this.originalNote = { ...note };
          }
        },
        error: (error) => {
          console.error('Error: ', error.status);
          this.router.navigate(['/']);
        }
      });
    });
  }

  hasChanges(): boolean {
    return this.note.title !== this.originalNote.title ||
      this.note.text !== this.originalNote.text;
  }

  onConfirmEdit(): void {
    if (this.note && this.hasChanges()) {
      this.noteService.updateNote(this.note.id, this.note).subscribe({
        next: (note) => {
          if (!note) {
            alert("Something went wrong while updating the note")
          } else {
            console.log("Note updated sucessfully");
            this.router.navigate(['/']);
          }
        },
        error: (error) => {
          console.error('Error: ', error.status);
        }
      });
    }
  }

  onCancelEdit(): void {
    this.router.navigate(['/']);
  }
}
