import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(
      private _http: HttpClient
  ) { }

  getFolders() {
    const foldersUrl: string = environment.API_ADDRESS + '/users';
    return this._http.get(foldersUrl);
  }
}
