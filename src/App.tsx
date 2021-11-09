import React, { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import LandingPage from "./pages/Landing/Landing.page";
import NotFound from "./pages/NotFound/NotFound.page";

const list = require("./mock.json").data;
const queryClient = new QueryClient();

function App(): React.ReactElement {
  useEffect(() => {
    const propertyListData = localStorage.getItem("propertyListData");
    if (isEmpty(propertyListData)) {
      localStorage.setItem("propertyListData", JSON.stringify(list));
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          {/* Redirect when route not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
