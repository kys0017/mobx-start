import { inject, observer } from "mobx-react";
import { useCallback } from "react";
import UserList from "../components/UserList";

const UserListContainer = ({ userStore }) => {
  const getUsers = useCallback(() => {
    userStore.getUsers();
  }, [userStore]);

  const users = userStore.state.users;

  return <UserList getUsers={getUsers} users={users} />;
};

export default inject("userStore")(observer(UserListContainer));
