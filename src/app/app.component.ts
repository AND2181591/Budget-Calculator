import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trash: boolean = false;

  onDrag() {
    this.trash = !this.trash;
  }
}
