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
  activeFolderId: number;
  noteSubscription: Subscription;
  folderSubscription: Subscription;
  noteIsFormatted: boolean = false;

  constructor(
    private noteService: NoteService
  ) {
    this.noteSubscription = this.noteService.getNote().subscribe(note => {
      if (note) {
        this.activeFolderId = note.userId;
        this.note = note;
        this.noteIsFormatted = true;
      } else {
        this.clearNoteValues();
        this.noteIsFormatted = false;
      }
    },
    error => {
      console.log(error);
    });
    this.folderSubscription = this.noteService.getFolderId().subscribe(folderId => {
      if (this.activeFolderId !== folderId) {
        this.clearNoteValues();
      }
    })
  }

  ngOnInit() {}

  clearNoteValues() {
    this.activeFolderId = null;
    this.noteIsFormatted = false;
  }

}
