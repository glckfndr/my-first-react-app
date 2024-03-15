export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}


export const expenseData: Expense[] = [
  { id: 1, amount: 10, description: "oil0", category: "Groceries" },
  { id: 2, amount: 20, description: "boots", category: "Utilities" },
  { id: 3, amount: 30, description: "oil2", category: "Groceries" },
  { id: 4, amount: 40, description: "oil3", category: "Groceries" },
];
