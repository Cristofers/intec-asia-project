import React, { useEffect } from "react";
import UserProfile from "../components/user-profile";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/log-in");
    }
  }, []);

  return <UserProfile />;
};

export default UserProfilePage;
