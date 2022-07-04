import React from "react";
import { HiperLink, MainForm } from "./style";
import SeparatorLine from "../separatorLine";
import Wrapper from "../wrapper";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper imageBG="https://www.intec.edu.do/media/zoo/images/INTEC-1_b019455595461015795efdb01fe78d3c.jpg">
      <div>
        <MainForm>
          <h2 className="form-title">Log in</h2>
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
            // onChange={handleChange}
          />
          <label className="form-label" htmlFor="password">
            Ingrese Contraseña
          </label>
          <input
            className="form-item"
            placeholder="Password goes here..."
            name="password"
            type="password"
            // onChange={handleChange}
          />
          <SeparatorLine />
          <HiperLink to="/SignUp">¿Olvidaste tu Contraseña?</HiperLink>
          <input className="form-button" value="Iniciar Secion" type="submit" />
          <p>--o--</p>
          <input className="form-button" value="Registrarse" type="button" />
        </MainForm>
      </div>
    </Wrapper>
  );
};

export default Login;
