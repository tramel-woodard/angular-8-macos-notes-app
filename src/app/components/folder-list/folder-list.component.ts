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
  foldersAreLoaded: boolean = false;

  constructor(
    private folderService: FolderService,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getFolders();
  }

  clickFolder(folderId: number) {
    this.checkActiveFolder(this.activeFolderId, folderId);
    this.activeFolderId = folderId;
    this.noteService.setFolderId(folderId);
  }

  checkActiveFolder(oldFolderId: number, newFolderId: number) {
    if (oldFolderId && (oldFolderId !== newFolderId)) {
      let oldFolder = document.getElementsByClassName('folder-' + oldFolderId)[0];
      oldFolder.classList.remove('activeFolder');
    }
    let newFolder = document.getElementsByClassName('folder-' + newFolderId)[0];
    newFolder.classList.add('activeFolder');
  }

  checkActiveNote(folderId: number) {
    if (this.activeFolderId !== folderId) {
      this.noteService.clearNote();
    }
  }

  getFolders() {
    this.checkActiveNote(this.activeFolderId);
    this.folderService.getFolders()
      .subscribe((folders: Folder[]) => {
        this.folders = folders;
        this.sortFolders(this.folders);
      },
      error => {
        console.log(error.message);
      },
      () => {
        this.foldersAreLoaded = true;
      });
  }

  sortFolders(folders: Folder[]) {
    folders.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
}
