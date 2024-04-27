import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondo-angular';

  onClick(e: Event) {
    this.title = "click sul bottone"
  }
  
  onInput(e: Event) {
    this.title = (<HTMLInputElement>e.target).value
  }
}
