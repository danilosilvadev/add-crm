import React from "react";
import "./index.css";
import { AppProvider } from "./config";
import { makeServer } from "./config/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return <AppProvider />;
}

export default App;
