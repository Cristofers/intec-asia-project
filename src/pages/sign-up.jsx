import React, { useEffect } from "react";
import SignUp from "../components/sign-up";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth.loggedIn()) {
      navigate("/");
    }
  }, []);

  return <SignUp />;
};

export default SignUpPage;
