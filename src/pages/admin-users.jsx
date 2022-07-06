import React, { useEffect } from "react";
import AdminUsers from "../components/admin-users";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const AdminUsersPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <AdminUsers />;
};

export default AdminUsersPage;
