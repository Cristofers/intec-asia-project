import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/sign-up";
import LogInPage from "./pages/log-in";
import PrincipalMenuPage from "./pages/principal-menu";
import AdminSubjectsPage from "./pages/admin-task";
import AdminStudentsPage from "./components/admin-students";
import AdminTeachers from "./components/admin-teachers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalMenuPage />} />
        <Route path="/admin-subjects" element={<AdminSubjectsPage />} />
        <Route path="/admin-students" element={<AdminStudentsPage />} />
        <Route path="/admin-teachers" element={<AdminTeachers />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
