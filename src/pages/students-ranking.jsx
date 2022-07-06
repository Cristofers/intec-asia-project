import React, { useEffect } from "react";
import StudentsRanking from "../components/students-ranking";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const StudentsRankingPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);
  return <StudentsRanking />;
};

export default StudentsRankingPage;
