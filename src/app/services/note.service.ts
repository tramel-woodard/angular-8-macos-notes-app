import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

import { Note } from '../models/note.model';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _id = new Subject<number>();
  private _note = new Subject<Note>();

  constructor(
    private _http: HttpClient
  ) { }

  clearId() {
    this._id.next();
  }

  clearNote() {
    this._note.next();
  }

  getId(): Observable<number> {
    return this._id.asObservable();
  }

  getNote(): Observable<Note> {
    return this._note.asObservable();
  }

  getNotes(id: number) {
    const notesUrl: string = environment.API_ADDRESS + '/posts?userId=' + id;
    return this._http.get(notesUrl);
  }
  
  renderNote(notes: Note) {
    notes.noteTitle = notes.body.substring(0, 25);
    notes.noteDescription = notes.body.substr(25, 38);
  }

  renderNotes(notes: Note[]) {
    for (let i = 0; i < notes.length; i++) {
      notes[i].noteTitle = notes[i].body.substring(0, 25);
      notes[i].noteDescription = notes[i].body.substr(25, 38);
    }
  }

  setId(id: number) {
    this._id.next(id);
  }

  setNote(note: Note) {
    this._note.next(note);
  }
}
