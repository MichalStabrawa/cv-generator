"use client"; // This is a client component
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Test from "./components/Test/Test";
import NavComponent from "./components/NavComponent/NavComponent";
import GetPersonalData from "./components/GetPersonalData/GetPersonalData";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
}

interface GetPersonalDataProps {
  change: (data: FormData) => void;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData | {}>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the change function with the form data
    // change(formData);
  };

  return (
    <div>
      <div>
        {" "}
        <NavComponent />
      </div>
      <HeaderComponent />

      <GetPersonalData change={handleInputChange} />
      <Test />
    </div>
  );
}
