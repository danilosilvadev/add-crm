import React from "react";
import "./index.css";
import { AppProvider, makeServer } from "./config";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return <AppProvider />;
}

export default App;
