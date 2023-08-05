
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import RepaymentSchedule from "./pages/repaymentSchedulePage/repaymentSchedulePage";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/repayment-schedule" element={<RepaymentSchedule />} />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
