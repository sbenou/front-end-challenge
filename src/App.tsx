import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import LandingPage from "./pages/Landing";

const list = require("./mock.json").data;

function App(): React.ReactElement {
  useEffect(() => {
    const propertyListData = localStorage.getItem("propertyListData");
    if (isEmpty(propertyListData)) {
      localStorage.setItem("propertyListData", JSON.stringify(list));
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        {/* Redirect when route not found */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
