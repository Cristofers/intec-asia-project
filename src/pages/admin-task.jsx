import React, { useEffect } from "react";
import AdminSubjects from "../components/admin-subjects";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const AdminSubjectsPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <AdminSubjects />;
};

export default AdminSubjectsPage;
