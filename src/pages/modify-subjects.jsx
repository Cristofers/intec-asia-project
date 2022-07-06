import React, { useEffect } from "react";
import ModifySubject from "../components/modify-subjects";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const ModifySubjectsPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <ModifySubject />;
};

export default ModifySubjectsPage;
