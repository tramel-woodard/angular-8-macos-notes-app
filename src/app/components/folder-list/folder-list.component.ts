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

  constructor(
    private folderService: FolderService,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getFolders();
  }

  getFolders() {
    this.folderService.getFolders()
      .subscribe((folders: Folder[]) => {
        this.folders = folders;
      });
  }

  clickFolder(id: number) {
    this.noteService.setFolderId(id);
  }
}
