import axios, { CanceledError } from "axios";
import { MouseEvent, useEffect, useReducer, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const httpAddress = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (id: number) => {
    const initialUsers = [...users];
    setError("");
    setUsers(users.filter((user) => user.id !== id));
    axios.delete(httpAddress + "/" + id).catch((err) => {
      setError(err.message);
      setUsers(initialUsers);
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<User[]>(httpAddress, {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="spinner-border text-danger" role="status"></div>
      )}
      <ul className={"list-group"}>
        {users.map((user) => (
          <li
            key={user.id}
            className={"list-group-item  d-flex justify-content-between"}
          >
            {user.name}
            <button
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
