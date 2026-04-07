interface Expense {
  id: String;
  title: String;
  amount: number;
  category: ExpenseCategory;
}

type ExpenseCategory =
  | 'Work'
  | 'Personal'
  | 'Grocery'
  | 'Utilities'
  | 'Shopping'
  | 'Travel'
  | 'Food';
