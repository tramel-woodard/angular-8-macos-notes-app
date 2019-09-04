import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-eight-macos-notes-app';

  getNotes(event) {
    console.log('$event', event);
  }
}
