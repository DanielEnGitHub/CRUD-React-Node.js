import * as React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Rutas from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"> Home</Link>
        <Link to="products"> Products</Link>
        <Link to="category"> Products</Link>
        <Link to="reports"> Reports</Link>
      </header>
      <Rutas/>
    </BrowserRouter>
  );
}