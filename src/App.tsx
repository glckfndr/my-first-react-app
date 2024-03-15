import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import categories from "./expense-tracker/components/categories";
import { Expense, expenseData } from "./expense-tracker/components/expenseData";

function App() {
  const allCat = "All Categories";
  const [category, setCategory] = useState<string>(allCat);
  const [expenses, setExpenses] = useState(expenseData);

  const handleDelete = (id: number) => {
    setExpenses([...expenses].filter((el) => el.id !== id));
  };

  return (
    <>
      <ExpenseForm
        onSubmit={(data) => setExpenses([...expenses, { id: 100, ...data }])}
      />
      <ExpenseFilter
        categories={[allCat, ...categories]}
        onChange={(category) => setCategory(category)}
      />
      <ExpenseList
        expenseData={expenses}
        category={category}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
