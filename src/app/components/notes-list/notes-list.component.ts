import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NoteService } from '../../services/note.service';

import { Note } from '../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [];
  subscription: Subscription;
  noteIsFormatted: boolean = false;
  noteIsActive: boolean = false;
  activeNote: Note;

  constructor(
    private noteService: NoteService
  ) {
    this.subscription = this.noteService.getFolderId().subscribe(id => {
      if (id) {
        this.noteService.getNotes(id)
          .subscribe((notes: Note[]) => {
            this.notes = notes;
            this.renderNotes(this.notes);
          },
          error => {
            console.log(error);
          },
          () => {
            this.noteIsFormatted = true;
          });
      } else {
        this.notes = [];
      }
    })
  }

  ngOnInit() {
    
  }

  activateNote(id: number) {

  }

  clickNote(note: Note) {
    console.log('note', note);
    this.noteService.setNote(note);
  }

  renderNotes(notes: Note[]) {
    this.noteService.renderNotes(notes);
  }
}
