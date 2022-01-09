import { useEffect } from "react";

export default function UserList({ getUsers, users }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}
