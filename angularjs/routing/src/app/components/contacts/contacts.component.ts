import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  people = [
    {name: "Davide", surname: "Ciampa", phone: 33311111111},
    {name: "Silvia", surname: "Setti", phone: 33311111111},
    {name: "Valentina", surname: "Secchi", phone: 33311111111} ,
    {name: "Daniele", surname: "Pirina", phone: 33311111111},
    {name: "Davide", surname: "Meloni", phone: 33311111111},
  ]
}
