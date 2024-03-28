import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();
  const deleteUser = (id: number) => {
    const initialUsers = [...users];
    setError("");
    setUsers(users.filter((user) => user.id !== id));
    userService.delete(id).catch((err) => {
      setError(err.message);
      setUsers(initialUsers);
    });
  };

  const addUser = () => {
    const initialUsers = [...users];
    const newUser: User = { name: "Oleh", id: 0 };
    setUsers([newUser, ...users]);
    userService
      .add<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...initialUsers]))
      .catch((err) => {
        setError(err.message);
        setUsers(initialUsers);
      });
  };

  const updateUser = (user: User) => {
    const initialUsers = [...users];
    const updatedUser: User = { ...user, name: user.name + "!!!" };
    setUsers(users.map((usr) => (usr.id === user.id ? updatedUser : usr)));
    userService
      .update<User>(updatedUser)
      .then(({ data: newUser }) =>
        setUsers(users.map((usr) => (usr.id === user.id ? newUser : usr)))
      )
      .catch((err) => {
        setError(err.message);
        setUsers(initialUsers);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="spinner-border text-danger" role="status"></div>
      )}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className={"list-group"}>
        {users.map((user) => (
          <li
            key={user.id}
            className={"list-group-item  d-flex justify-content-between"}
          >
            {user.id + ". "}
            {user.name}
            <div>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
