import React, { useEffect } from "react";
import CalculatedIndex from "../components/calculated-index";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const CalculatedIndexPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <CalculatedIndex />;
};

export default CalculatedIndexPage;
