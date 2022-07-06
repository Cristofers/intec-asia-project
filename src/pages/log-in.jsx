import React, { useState, useEffect } from "react";
import Login from "../components/log-in";
import AuthService from "../AuthProject";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [data, setData] = useState({
    studentID: "",
    password: "",
  });
  const Auth = new AuthService();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    Auth.login(data.studentID, data.password)
      .then((res) => {
        if (Auth.loggedIn()) navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (Auth.loggedIn()) {
      navigate("/");
    }
  }, []);

  return (
    <Login
      handleFormSubmit={handleFormSubmit}
      handleChange={handleChange}
      data={data}
    />
  );
};

export default LogInPage;
