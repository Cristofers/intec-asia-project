import React from "react";
import { Wrapper, HiperLink, MainForm } from "./style";
import { SeparatorLine } from "../../GeneralStyle";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <Wrapper>
      <div>
        <MainForm>
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
          <label className="form-label" htmlFor="Rpassword">
            Nombre de usuario
          </label>
          <input
            className="form-item"
            placeholder="Repeat your password here..."
            name="Rpassword"
            type="password"
            // onChange={handleChange}
          />
          <SeparatorLine />
          <input className="form-submit" value="Registrarse" type="submit" />
          <HiperLink to="/SignUp">Volver al Log-in</HiperLink>
        </MainForm>
      </div>
    </Wrapper>
  );
};

export default SignUp;
