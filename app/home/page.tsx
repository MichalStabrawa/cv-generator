"use client"; // This is a client component
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

import NavComponent from "../components/NavComponent/NavComponent";
import GetPersonalData from "../components/GetPersonalData/GetPersonalData";
import { useAppContext } from "../store/AppContext";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  streetAddress?: string;
  city: string;
  region?: string;
  postalCode?: string;
}

interface GetPersonalDataProps {
  change: (data: FormData) => void;
}

export default function Home() {
  const { state, dispatch } = useAppContext();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const formDataIsReady = () => {
    if (Object.keys(formData).length > 0) {
      return true;
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = formDataIsReady() ? { [name]: value } : {};

    // Update formData with the previous data and the new value
    setFormData((prevData) => ({
      ...prevData,
      ...updatedFormData,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_FORM_DATA", payload: formData });
  };

  return (
    <div>
      <div>
        {" "}
        <NavComponent />
      </div>
      <HeaderComponent />

      <GetPersonalData change={handleInputChange} submit={handleSubmit} />
    </div>
  );
}
