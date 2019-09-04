import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { User } from '../../models/user.module';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        console.log('users', this.users);
      });
  }

  clickFolder(id) {
    console.log('Folder clicked: user = ' + id);
  }

}
