import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private _http: HttpClient
  ) { }

  getUsers() {
    const usersUrl: string = environment.API_ADDRESS + '/users';
    return this._http.get(usersUrl);
  }
}
