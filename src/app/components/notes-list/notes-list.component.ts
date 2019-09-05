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

  constructor(
    private noteService: NoteService
  ) {
    this.subscription = this.noteService.getId().subscribe(id => {
      if (id) {
        this.noteService.getNotes(id)
          .subscribe((notes: Note[]) => {
            this.notes = notes;
            this.renderNotes(this.notes);
          },
          error => {
            console.log(error.message);
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

  clickNote(id: number) {

  }

  renderNotes(notes: Note[]) {
    for (let i = 0; i < notes.length; i++) {
      notes[i].noteTitle = notes[i].body.substring(0, 25);
      notes[i].noteDescription = notes[i].body.substr(25, 38);
    }
  }

}
