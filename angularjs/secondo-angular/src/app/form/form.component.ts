import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
