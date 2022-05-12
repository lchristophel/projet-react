import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageClient from "./pages/PageClient";
import PageAjout from "./pages/PageAjout";
import SuppClient from "./components/SuppClient";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="*" element={<Home />} />{" "}
        <Route path="/clients/:id" name="PageClient" element={<PageClient />} />
        <Route path="/clients/ajout" element={<PageAjout />} />
        <Route path="/clients/supp/:id" element={<SuppClient />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}
export default App;
