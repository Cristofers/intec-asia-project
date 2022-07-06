import React, { useEffect } from "react";
import Ranking from "../components/ranking";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const RankingPage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);
  return <Ranking />;
};

export default RankingPage;
