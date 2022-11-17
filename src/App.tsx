import React from "react";
import "./index.css";
import { makeServer, Providers } from "./config";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return <Providers.AppProvider />;
}

export default App;
