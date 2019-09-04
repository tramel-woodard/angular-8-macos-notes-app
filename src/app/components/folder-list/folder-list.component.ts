import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  clickFolder(id: number) {
    this.noteService.setId(id);
  }
}
