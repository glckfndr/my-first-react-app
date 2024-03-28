import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
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
