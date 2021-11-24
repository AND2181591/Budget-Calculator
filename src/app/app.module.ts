import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TotalDisplayComponent } from './total-display/total-display.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ItemListComponent } from './shared/item-list/item-list.component';
import { ItemComponent } from './shared/item/item.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalDisplayComponent,
    ItemInputComponent,
    ItemListComponent,
    ItemComponent,
    IncomeListComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule, 
    FlexLayoutModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
