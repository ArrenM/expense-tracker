import { computed, Injectable, signal } from '@angular/core';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([
    { title: 'placeholder 1', id: '-1', amount: 1, category: 'Food' },
    { title: 'placeholder 2', id: '-2', amount: 10, category: 'Grocery' },
    { title: 'placeholder 3', id: '-3', amount: 100, category: 'Personal' },
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

  nextId = signal<number>(0);

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
    this.nextId.update((value) => value + 1);
  }

  deleteExpense(id: String) {
    this.expenses.update((value) => value.filter((item) => item.id != id));
  }

  getExpenseById(id: String): Expense | undefined {
    return this.expenses().find((value) => value.id === id);
  }
}
