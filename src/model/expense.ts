export interface Expense {
  id: String;
  title: String;
  amount: number;
  category: ExpenseCategory;
}

export type ExpenseCategory =
  | 'Work'
  | 'Personal'
  | 'Grocery'
  | 'Utilities'
  | 'Shopping'
  | 'Travel'
  | 'Food'
  | 'None';
