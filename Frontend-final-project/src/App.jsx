import React from "react";
import PageFooter from "./components/fixed/PageFooter";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/browse" element={<Homepage />} />
          <Route path="/browse/:vim" element={<Homepage />} />
          <Route path="/compare" element={<Homepage />} />
          <Route path="/contact" element={<Homepage />} />
        </Routes>
      <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
