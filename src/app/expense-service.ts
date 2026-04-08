import { computed, Injectable, signal } from '@angular/core';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  categories = signal<String[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food',
  ]);

  totalExpense = computed(() => {
    let total = 0;
    for (let expense of this.expenses()) {
      total += expense.amount;
    }
    return total;
  });

  highestExpense = computed(() => {
    let highest = 0;
    for (let expense of this.expenses()) {
      if (expense.amount > highest) {
        highest = expense.amount;
      }
    }
    return highest;
  });

  averageExpense = computed(() => {
    if (this.transactionCount() != 0) {
      return this.totalExpense() / this.transactionCount();
    } else {
      return 0;
    }
  });

  transactionCount = computed(() => {
    return this.expenses().length;
  });

  addExpense(expense: Expense) {
    this.expenses.update((value) => [...value, expense]);
  }

  deleteExpense(id: String) {
    this.expenses.update((value) => value.filter((item) => item.id != id));
  }
}
