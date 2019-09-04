import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _id = new Subject<number>();

  constructor(
    private _http: HttpClient
  ) { }

  clearId() {
    this._id.next();
  }

  getId(): Observable<number> {
    return this._id.asObservable();
  }

  getNotes(id: number) {
    const notesUrl: string = environment.API_ADDRESS + '/posts?userId=' + id;
    return this._http.get(notesUrl);
  }

  setId(id: number) {
    this._id.next(id);
  }
}
