import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function Form(): JSX.Element {
  const [person, setPerson] = useState<{name: string, age:string|number}>({name: '', age: ''})
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person)
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input value={person.name} onChange={(ev) => setPerson({...person, name: ev.target.value})} id="name" type="text" className="form-control" name="name" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:{" "}
        </label>
        <input value={person.age} onChange={(ev) => setPerson({...person, age: parseInt(ev.target.value)})} id="age" type="number" className="form-control" name="age" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
