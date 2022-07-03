import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/sign-up";
import LogInPage from "./pages/log-in";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<LogInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
