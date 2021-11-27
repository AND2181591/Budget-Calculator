import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BudgetService } from '../budget.service';

import { Item } from '../shared/item.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Item[] = [];
  @Output() trash = new EventEmitter();

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.getExpenses$
      .subscribe((expenses: Item[]): void => {
        this.expenses = expenses;
      });
  }

  itemDropped(item: CdkDragDrop<Item[]>) {
    this.budgetService.moveItem('expense', item);
    console.log(item);
  }

  onClose(index: number) {
    this.budgetService.deleteItem(index, 'expense');
  }
}
