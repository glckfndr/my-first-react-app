import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
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
          <li key={user.id} className={"list-group-item"}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
