import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-childparent',
  templateUrl: './childparent.component.html',
  styleUrl: './childparent.component.css'
})
export class ChildparentComponent implements OnInit {
  
  @Output() getDataOut = new EventEmitter<any>()
  
  obj = [
    {name: "Davide", age: "27"},
    {name: "Silvia", age: "25"},
    {name: "Valentina", age: "31"},
    {name: "Daniele", age: "30"},
    {name: "Davide", age: "30"}
  ]
  
  ngOnInit(): void {}

  sendData() {
    this.getDataOut.emit(this.obj)
  }
}
