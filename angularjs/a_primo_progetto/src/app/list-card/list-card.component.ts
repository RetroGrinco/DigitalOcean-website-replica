import { Component } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})

export class ListCardComponent {
  
  dogs = [
    {
      name: "cane 1",
      race: "razza 1",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      name: "cane 2",
      race: "razza 2",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      name: "cane 3",
      race: "razza 3",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    }
  ]

  cats = [
    {
      name: "cat 1",
      race: "razza 1",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      name: "cat 2",
      race: "razza 2",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      name: "cat 3",
      race: "razza 3",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    }
  ]
}
