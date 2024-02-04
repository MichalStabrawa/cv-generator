"use client"; // This is a client component
import React, { createContext, useContext, useReducer, Dispatch } from "react";

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
interface AppState {
  formData: FormData;
}

interface AppAction {
  type: string;
  payload: Partial<FormData>;
}

const initialState: AppState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  },
};
type ListProps = {
  children: React.ReactNode;
};

const AppContext = createContext<
  { state: AppState; dispatch: Dispatch<AppAction> } | undefined
>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    default:
      return state;
  }
};

const AppProvider = ({ children }: ListProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
