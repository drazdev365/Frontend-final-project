import React from "react";
import PageFooter from "./components/fixed/PageFooter";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import VehicleDetail from "./pages/CarDetails";
import CarFilterPage from "./pages/BrowsePage";
import AboutPage from "./pages/AboutPage";
import Form from "./pages/Form";
import ContactSection14 from "./pages/ContactUs";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/browse" element={<CarFilterPage />} />
          <Route path="/browse/:vin" element={<VehicleDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactSection14 />} />
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
