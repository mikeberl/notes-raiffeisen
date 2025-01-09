import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Note, NoteCreate } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Toast from 'bootstrap/js/dist/toast';
import { Router } from '@angular/router';
// import bootstrap from 'bootstrap';

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

  newNote: NoteCreate = { title: '', text: '' };

  constructor(private noteService: NoteService,
              private router: Router,
              private modalService: NgbModal) {}

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

  goToEdit(note: Note): void {
    this.router.navigate(['/edit', note.id]);
  }



  createNote(): void {
    this.noteService.createNote(this.newNote).subscribe(
      (response) => {
        this.showToast('Note created successfully!', true);
        this.loadNotes();
        this.newNote = { title: '', text: '' };
        this.modalService.dismissAll();
      },
      (error) => {
        this.showToast('Error creating note. Please try again.', false);
      }
    );
  }

  showToast(message: string, success: boolean): void {
    const toastElement = document.getElementById('liveToast');
    const toastBody = toastElement?.querySelector('.toast-body');

    if (toastBody) {
      toastBody.textContent = message;
    }
    if (success) {
      toastElement?.classList.remove('bg-danger');
      toastElement?.classList.add('bg-success', 'text-white');
    }
    else {
      toastElement?.classList.remove('bg-success');
      toastElement?.classList.add('bg-danger', 'text-white');
    }
    const toast = new Toast(toastElement!);
    toast.show();
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
