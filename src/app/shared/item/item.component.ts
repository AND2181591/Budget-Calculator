import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemIndex!: number;
  @Input() item!: Item;
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }
}
