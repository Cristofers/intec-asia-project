import React, { useEffect } from "react";
import AdminTeachers from "../components/admin-teachers";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const AdminTeachersPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <AdminTeachers />;
};

export default AdminTeachersPage;
