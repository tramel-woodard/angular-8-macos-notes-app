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

  constructor(
    private noteService: NoteService
  ) {
    this.subscription = this.noteService.getId().subscribe(id => {
      if (id) {
        console.log('has id');
        this.noteService.getNotes(id)
          .subscribe((notes: Note[]) => {
            this.notes = notes;
            console.log('this.notes', this.notes);
          });
      } else {
        console.log('there was no id passed, and no notes');
        this.notes = [];
      }
    })
  }

  ngOnInit() {
    
  }

}
