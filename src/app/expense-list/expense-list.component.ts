import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

import { Item } from '../shared/item.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Item[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.getExpenses$
      .subscribe((expenses: Item[]): void => {
        this.expenses = expenses;
      });
  }

}
