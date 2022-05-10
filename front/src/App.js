import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Carambar from "./pages/Carambar"
function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/test" element={<Test />} />{" "}
        <Route path="/carambar" element={<Carambar />} />{" "}
        <Route path="*" element={<Home />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
export default App;
