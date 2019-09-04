import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NoteHeaderComponent } from './components/note-header/note-header.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    FolderListComponent,
    NotesListComponent,
    NoteDetailComponent,
    NoteHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging, turn off for production
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
