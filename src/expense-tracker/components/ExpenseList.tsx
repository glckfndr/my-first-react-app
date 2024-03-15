import { Expense } from "./expenseData";

interface Props {
  expenseData: Expense[];
  handleDelete: (index: number) => void;
  category: string;
}

const ExpenseList = ({ expenseData, category, handleDelete }: Props) => {
  const allCat = "All Categories";

  const data = [...expenseData].filter((el) =>
    category === allCat ? true : el.category === category
  );

  if (data.length === 0) return null;
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: </td>
            <td>${expenseData.reduce((acc, el) => acc + el.amount, 0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
