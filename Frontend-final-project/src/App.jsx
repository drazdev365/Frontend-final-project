import React from "react";
import PageFooter from "./components/fixed/PageFooter";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import VehicleDetail from "./pages/CarDetails";
import CarFilterPage from "./pages/BrowsePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/browse" element={<CarFilterPage />} />
          <Route path="/browse/:vin" element={<VehicleDetail />} />
          {/* <Route path="/compare" element={<Homepage />} /> */}
          <Route path="/contact" element={<Homepage />} />
        </Routes>
      <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
