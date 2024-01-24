import React from "react";
import { AppProvider } from "../store/AppContext";
import UserComponent from '../components/UserComponents/UserComponent'


function User() {

  return (
    <AppProvider>
      <h1>User</h1>
      <UserComponent/>
    </AppProvider>
  );
}

export default User;
