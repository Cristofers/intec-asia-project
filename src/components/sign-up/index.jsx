import React, { userState, useState } from "react";
import { HiperLink, MainForm } from "./style";
import SeparatorLine from "../separatorLine";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../wrapper";

const SignUp = () => {
  const [data, setData] = useState({
    studentID: "",
    password: "",
    r_password: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <Wrapper imageBG="https://fastly.4sqi.net/img/general/600x600/41014375_uk13e70GiFvyb-uAA8W1XzUBJVpD1012GMZhdhcRQJc.jpg">
      <div>
        <MainForm onSubmit={(e) => handleSubmit(e)}>
          <h2 className="form-title">Registrar Cuenta</h2>
          <SeparatorLine />
          <label className="form-label" htmlFor="studentID">
            Ingrese ID
          </label>
          <input
            className="form-item"
            placeholder="Your ID goes here..."
            name="studentID"
            type="text"
            autoComplete="off"
            value={data.studentID}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="password">
            Ingrese Contraseña
          </label>
          <input
            className="form-item"
            placeholder="Password goes here..."
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="Rpassword">
            Nombre de usuario
          </label>
          <input
            className="form-item"
            placeholder="Repeat your password here..."
            name="Rpassword"
            type="password"
            value={data.r_password}
            onChange={handleChange}
          />
          <SeparatorLine />
          <input className="form-submit" value="Registrarse" type="submit" />
          <HiperLink to="/log-in">Volver al Log-in</HiperLink>
        </MainForm>
      </div>
    </Wrapper>
  );
};

export default SignUp;
