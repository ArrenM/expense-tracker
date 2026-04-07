import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([
    { id: '1', title: 'One', amount: 1, category: 'Work' },
    { id: '2', title: 'Two', amount: 2, category: 'Food' },
  ]);

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
    return this.totalExpense() / this.transactionCount();
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
