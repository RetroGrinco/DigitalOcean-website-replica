import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'parentChild_childParent';

  people = [
    {name: "Davide", surname: "Ciampa", age: "27", gender:"male"},
    {name: "Silvia", surname: "Setti", age: "25", gender:"female"},
    {name: "Valentina", surname: "Secchi", age: "31", gender:"female"},
    {name: "Daniele", surname: "Pirina", age: "30", gender:"male"},
    {name: "Davide", surname: "Meloni", age: "30", gender:"male"},
  ]

  getDataOut(value: any) {
    console.log(value)
  }
}
