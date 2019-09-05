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
  activeNoteId: number;

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

  checkActiveNote(oldNoteId: number, newNoteId: number) {
    if (oldNoteId && (oldNoteId !== newNoteId)) {
      let oldNote = document.getElementsByClassName('note-' + oldNoteId)[0];
      oldNote.classList.remove('activeNote');
    }
    let newNote = document.getElementsByClassName('note-' + newNoteId)[0];
    newNote.classList.add('activeNote');
  }

  clickNote(note: Note) {
    this.checkActiveNote(this.activeNoteId, note.id);
    this.activeNoteId = note.id;
    this.noteService.setNote(note);
  }

  populateNotesItemsWithClasses() {
    let notesItems: HTMLCollectionOf<Element> = document.getElementsByClassName('notes-list-item');
    this.notes.map((note, i) => {
      let className: string = 'folder-' + note.id;
    });
  }

  renderNotes(notes: Note[]) {
    this.noteService.renderNotes(notes);
  }
}
