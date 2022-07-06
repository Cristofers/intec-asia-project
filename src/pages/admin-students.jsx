import React, { useEffect } from "react";
import AdminEstudents from "../components/admin-students";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const AdminStudentsPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <AdminEstudents />;
};

export default AdminStudentsPage;
