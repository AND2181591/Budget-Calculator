import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  hidden = true;
  @Input() item!: Item;
  @Output() trash = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  toggleCloseVisibility() {
    this.hidden = !this.hidden;
  }

  onDrag() {
    this.trash.emit();
  }
}
