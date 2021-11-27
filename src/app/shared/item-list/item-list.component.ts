import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: Item[] = [];
  @Output() close = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(index: number) {
    this.close.emit(index);
  }
}