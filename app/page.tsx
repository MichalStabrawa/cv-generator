import React from "react";
import { AppProvider } from "./store/AppContext";
import Home from "./home/page";

function App() {
  return <AppProvider><Home/></AppProvider>
}

export default App;