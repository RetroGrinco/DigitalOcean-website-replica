import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'parentChild_childParent';

  people = [
    {name: "Davide", surname: "Ciampa", age: "27", gender:"male", status: true},
    {name: "Silvia", surname: "Setti", age: "25", gender:"female", status: true},
    {name: "Valentina", surname: "Secchi", age: "31", gender:"female", status: false},
    {name: "Daniele", surname: "Pirina", age: "30", gender:"male", status: false},
    {name: "Davide", surname: "Meloni", age: "30", gender:"male", status: true},
  ]

  getDataOut(value: any) {
    console.log(value)
  }
}
