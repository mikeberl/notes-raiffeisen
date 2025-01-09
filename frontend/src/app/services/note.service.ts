import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, NoteCreate } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'http://backend:8080/api/v1/notes';

    constructor(private http: HttpClient) { }

    getAllNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.apiUrl);
    }

    getNoteById(id: number): Observable<Note> {
      return this.http.get<Note>(`${this.apiUrl}/${id}`);
    }

    createNote(note: NoteCreate): Observable<Note> {
        return this.http.post<Note>(this.apiUrl, note);
    }

    updateNote(id: number, note: Note): Observable<Note> {
        return this.http.put<Note>(this.apiUrl, note);
    }

    deleteNote(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
