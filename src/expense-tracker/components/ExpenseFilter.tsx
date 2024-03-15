interface Props{
  categories: string[];
  onChange: (category: string) => void;
}

function ExpenseFilter({categories, onChange}: Props) {
  return (
    <div className='my-3'>
      <h5>Filter:</h5>
      <select
          name="category"
          id="category"
          className="form-control"
          onChange={(el) => onChange(el.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
    </div>
  )
}

export default ExpenseFilter
