import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/sign-up";
import LogInPage from "./pages/log-in";
import PrincipalMenuPage from "./pages/principal-menu";
import AdminSubjectsPage from "./pages/admin-task";
import AdminStudentsPage from "./components/admin-students";
import AdminTeachers from "./components/admin-teachers";
import AcademicRecordPage from "./pages/academic-record";
import UserProfilePage from "./pages/user-profile";
import CalculatedIndexPage from "./pages/calculated-index";
import RankingPage from "./pages/ranking";
import StudentsRankingPage from "./pages/students-ranking";
import ModifySubjectsPage from "./pages/modify-subjects";
import AddSubjectPage from "./pages/add-subjects";
import AdminUsers from "./components/admin-users";
import "./GeneralCssStyle.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalMenuPage />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-subjects" element={<AdminSubjectsPage />} />
        <Route path="/admin-task" element={<AdminSubjectsPage />} />
        <Route path="/admin-students" element={<AdminStudentsPage />} />
        <Route path="/admin-teachers" element={<AdminTeachers />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/add-subjects" element={<AddSubjectPage />} />
        <Route path="/calculated-index" element={<CalculatedIndexPage />} />
        <Route path="/academic-record" element={<AcademicRecordPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/students-ranking" element={<StudentsRankingPage />} />
        <Route path="/modify-subjects" element={<ModifySubjectsPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="*" element={<PrincipalMenuPage />} />
        {/* // page-not-found route */}
      </Routes>
    </Router>
  );
};

export default App;
