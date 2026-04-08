import { Component, inject } from '@angular/core';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-add-expense',
  imports: [],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseService = inject(ExpenseService);
}
