import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private http: HttpClient
  ) { }

  getUsers() {
    const usersUrl: string = environment.API_ADDRESS + '/users';
    return this.http.get(usersUrl);
  }
}
