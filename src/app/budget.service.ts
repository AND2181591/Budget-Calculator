import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Item } from './shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private total = 0;
  getTotal$ = new Subject<number>();

  private incomeArr: Item[] = [];
  getIncome$ = new Subject<Item[]>();

  private expenseArr: Item[] = [];
  getExpenses$ = new Subject<Item[]>();

  constructor() { }

  addItem(formInput: Item): void {
    if (formInput.budgetType === 'expense') {
      this.expenseArr.push(formInput);
      this.getExpenses$.next([...this.expenseArr]);
      this.calculateTotal(-formInput.amount);
    } else {
      this.incomeArr.push(formInput);
      this.getIncome$.next([...this.incomeArr]);
      this.calculateTotal(formInput.amount);
    }
  }

  deleteItem(index: number): void {
    
  }

  private calculateTotal(amount: number): void {
    this.total = this.total + amount;
    this.getTotal$.next(this.total);
  }
}
