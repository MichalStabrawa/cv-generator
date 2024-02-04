import React from "react";
import { AppProvider } from "../store/AppContext";
import UserComponent from "../components/UserComponents/UserComponent";

function User() {
  return (
    <AppProvider>
      <UserComponent />
    </AppProvider>
  );
}

export default User;
