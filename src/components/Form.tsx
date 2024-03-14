import { FieldValues, useForm } from "react-hook-form";

interface FormData{
  name: string;
  age: number;
}

function Form(): JSX.Element {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          {...register("name", {required: true, minLength: 3})}
          id="name"
          type="text"
          className="form-control"
          name="name"
        />
      </div>
      {errors.name?.type === 'required' &&  <p className="text-danger">The name field is required!</p>}
      {errors.name?.type === 'minLength' &&  <p className="text-danger">The name field must be at least 3 chars!</p>}

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:{" "}
        </label>
        <input
          {...register("age", {required: true, min: 16})}
          id="age"
          type="number"
          className="form-control"
          name="age"
        />
      </div>
      {errors.age?.type === 'required' &&  <p className="text-danger">The age field is required!</p>}
      {errors.age?.type === 'min' &&  <p className="text-danger">The age field must be greater than 15!</p>}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
