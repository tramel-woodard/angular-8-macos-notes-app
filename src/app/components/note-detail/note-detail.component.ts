import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NoteService } from '../../services/note.service';

import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note;
  subscription: Subscription;
  noteIsFormatted: boolean = false;

  constructor(
    private noteService: NoteService
  ) {
    this.subscription = this.noteService.getNote().subscribe(note => {
      console.log('note returned from note-detail subscription', note);
      if (note) {
        this.note = note;
        this.noteIsFormatted = true;
      } else {
        this.note = null;
        this.noteIsFormatted = false;
      }
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit() {}

}
