"use client"
import React from "react";

import { useAppContext } from "@/app/store/AppContext";

function UserComponet() {
  const { state } = useAppContext();
  const { formData } = state;

  return (
    <>
      <h2>UserComp</h2>
    </>
  );
}

export default UserComponet;
