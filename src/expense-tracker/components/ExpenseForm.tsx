import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";


const schema = z.object({
  description: z
    .string()
    .min(7, { message: "Description must be at least 7 characters!" }).max(50),
  amount: z
    .number({ invalid_type_error: "Amount field is required!" })
    .min(0.01, { message: "Amount must be at least 0.01!" }).max(100_000, { message: "Amount must be nor more than 100_000!" }),
  category: z.enum( categories, { errorMap: () => ({ message: 'Category is required.'})
  })
});
type FormData = z.infer<typeof schema>;

interface Props{
  onSubmit: (data: FormData) => void;
}

function ExpenseForm({onSubmit}: Props): JSX.Element {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="border border-primary rounded">
    <form onSubmit={handleSubmit(data =>  {
      onSubmit(data);
      reset();
      })} className="p-3">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
          name="description"
        />
      </div>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount:{" "}
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
          name="amount"
        />
      </div>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:{" "}
        </label>

        <select
        {...register("category")}
          name="category"
          id="category"
          className="form-control"
          onChange={(el) => console.log(el.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
    </div>
  );
}

export default ExpenseForm;
