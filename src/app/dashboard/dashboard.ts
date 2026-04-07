import { Component, inject } from '@angular/core';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  expenseService = inject(ExpenseService);
}
