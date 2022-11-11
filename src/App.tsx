import { useState } from "react";
import "./index.css";
import { createServer } from "miragejs";
import { AppProvider } from "./config";

let server = createServer({
  routes() {
    this.namespace = "api";
    this.get("/users", () => {
      return [
        { id: 1, name: "Bob" },
        { id: 2, name: "Alice" },
      ];
    });
  },
});

function App() {
  return <AppProvider />;
}

export default App;
