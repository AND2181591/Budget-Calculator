import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {
  @ViewChild('formDirective') formDirective: NgForm = {} as NgForm;
  @ViewChild('select') select: MatSelect = {} as MatSelect;

  budgetForm: FormGroup = new FormGroup({
    budgetType: new FormControl('', Validators.required), 
    amount: new FormControl('', Validators.required), 
    description: new FormControl('', Validators.required)
  });

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.budgetService.addItem(this.budgetForm.value);
    
    this.select.focus();
    this.formDirective.resetForm();
  }

}
