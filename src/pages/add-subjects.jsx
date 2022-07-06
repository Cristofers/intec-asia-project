import React, { useEffect } from "react";
import AddSubject from "../components/add-subjects";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const AddSubjectPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <AddSubject />;
};

export default AddSubjectPage;
