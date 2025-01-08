import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, NoteCreate } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'http://localhost:8080/api/v1/notes';

    constructor(private http: HttpClient) { }

    getAllNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.apiUrl);
    }

    createNote(demo: NoteCreate): Observable<Note> {
        return this.http.post<Note>(this.apiUrl, demo);
    }

    updateNote(id: number, demo: Note): Observable<Note> {
        return this.http.put<Note>(`${this.apiUrl}/${id}`, demo);
    }

    deleteNote(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
