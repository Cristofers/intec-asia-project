import React, { useEffect } from "react";
import PrincipalMenu from "../components/principal-menu";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const PrincipalMenuPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <PrincipalMenu />;
};

export default PrincipalMenuPage;
