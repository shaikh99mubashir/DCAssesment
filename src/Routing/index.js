import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentRequest from "../Screens/CurrentRequest";
import PreviousStays from "../Screens/PreviousStay";
import OngoingStays from "../Screens/OngoingStays";
import Reports from "../Screens/Reports";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrentRequest />} />
        <Route path="OngoingStays" element={<OngoingStays />} />
        <Route path="PreviousStays" element={<PreviousStays />} />
        <Route path="Reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
};
