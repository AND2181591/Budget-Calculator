import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { BudgetService } from '../budget.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  income: Item[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.getIncome$
      .subscribe((income: Item[]): void => {
        this.income = income;
      }); 
  }

  itemDropped(item: CdkDragDrop<Item[]>) {
    this.budgetService.moveItem('income', item);
  }

}
