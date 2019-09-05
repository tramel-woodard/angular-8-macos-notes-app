import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FolderService } from '../../services/folder.service';
import { NoteService } from '../../services/note.service';

import { Folder } from '../../models/folder.model';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  folders: Folder[];
  activeFolderId: number;

  constructor(
    private folderService: FolderService,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getFolders();
  }

  getFolders() {
    this.checkActiveNote(this.activeFolderId);
    this.folderService.getFolders()
      .subscribe((folders: Folder[]) => {
        this.folders = folders;
      });
  }

  clickFolder(folderId: number) {
    this.activeFolderId = folderId;
    this.noteService.setFolderId(folderId);
  }

  checkActiveNote(folderId: number) {
    if (this.activeFolderId !== folderId) {
      this.noteService.clearNote();
    }
  }
}
