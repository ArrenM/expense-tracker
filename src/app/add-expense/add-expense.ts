import { Component, inject } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { FormsModule } from '@angular/forms';
import { Expense, ExpenseCategory } from '../../model/expense';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseService = inject(ExpenseService);
  title = '';
  amount = 0;
  category: ExpenseCategory = 'None';

  add() {
    if (this.category != 'None' && this.title != '') {
      this.expenseService.addExpense({
        id: '',
        title: this.title,
        amount: this.amount,
        category: this.category,
      });
    }
  }
}
