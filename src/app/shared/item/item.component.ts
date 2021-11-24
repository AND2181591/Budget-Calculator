import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  hidden = true;
  @Input() item!: Item;

  constructor() {}

  ngOnInit(): void {
  }

  toggleCloseVisibility() {
    this.hidden = !this.hidden;
  }

  remove() {
    console.log('Kewl!');
  }

}