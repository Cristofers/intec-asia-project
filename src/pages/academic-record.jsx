import React, { useEffect } from "react";
import AcademicRecord from "../components/academic-record";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const AcademicRecordPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <AcademicRecord />;
};

export default AcademicRecordPage;
