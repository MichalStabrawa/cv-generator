"use client"
import React from "react";
import Link from "next/link";
import { useAppContext } from "../../store/AppContext";

function UserComponent() {
  const { state } = useAppContext();
  const { formData } = state;

  return (
    <>
      <h2>UserComp</h2>
      {formData.firstName}
      <Link href="/">Home</Link>
    </>
  );
}

export default UserComponent;
