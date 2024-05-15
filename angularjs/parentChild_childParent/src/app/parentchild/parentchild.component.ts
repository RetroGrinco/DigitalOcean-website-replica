import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrl: './parentchild.component.css'
})
export class ParentchildComponent implements OnInit {
  
  @Input() data: any;

  ngOnInit(): void {
    console.log(this.data);
  }
}
