import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}