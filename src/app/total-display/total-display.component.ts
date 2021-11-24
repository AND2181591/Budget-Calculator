import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-total-display',
  templateUrl: './total-display.component.html',
  styleUrls: ['./total-display.component.css']
})
export class TotalDisplayComponent implements OnInit {
  total = 0;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.getTotal$
      .subscribe((total) => {
        this.total = total;
      });
  }

}
