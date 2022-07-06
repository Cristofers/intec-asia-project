import React from "react";
import {
  AiOutlineCalendar,
  AiFillSetting,
  AiFillCalculator,
  AiFillFileText,
} from "react-icons/ai";
import { MainContainer, InfoContiner, MenuContaier, MenuButton } from "./style";
import SeparatorLine from "../separatorLine";
import Wrapper from "../wrapper";
import AuthService from "../../AuthProject";
import { Link, useNavigate } from "react-router-dom";
import UserImage from "../user-image";

const PrincipalMenu = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();
  return (
    <Wrapper imageBG="https://www.intec.edu.do/media/zoo/images/INTEC-1_b019455595461015795efdb01fe78d3c.jpg">
      <MainContainer>
        <InfoContiner>
          <UserImage size="75" />
          <p className="user-name">Bienvenido, {Auth.getProfile().username}</p>
          <div className="wellcome-text-container">
            <p className="wellcome-text">
              Bienvenido a la aplicacion de calculo de índice academico del
              INTEC. Una herramienta pensada para facilitar la vida de los
              estudiantes brindandoles acceso a diferentes servicios que forman
              parte del día a día del estudiante.
            </p>
          </div>
          <SeparatorLine />
          <div className="important-information-container">
            <h3 className="important-information-header">
              Información importante
            </h3>
            <div className="important-information">
              <div className="important-information-element">
                <p>Siguiente Feca de Pago</p>
                <AiOutlineCalendar className="important-information-element-icon" />
                <p>"Fecha de Pago"</p>
              </div>
              <div className="important-information-element">
                <p>Días restantes para semana de parciales:</p>
                <p className="important-information-element-important-text">
                  10
                </p>
              </div>
            </div>
          </div>
        </InfoContiner>
        <MenuContaier>
          <MenuButton to="/calculated-index">
            <AiFillCalculator className="menu-button-icon" />
            <p className="menu-button-text">Calcular Índice Académico</p>
          </MenuButton>
          <MenuButton to="/academic-record">
            <AiFillFileText className="menu-button-icon" />
            <p className="menu-button-text">Ver Historial Académico</p>
          </MenuButton>
          <MenuButton to="/modify-subject">
            <AiOutlineCalendar className="menu-button-icon" />
            <p className="menu-button-text">Seleccionar Asignaturas</p>
          </MenuButton>

          <MenuButton
            onClick={() => {
              Auth.logout();
            }}
            to="/log-in"
          >
            <AiFillSetting className="menu-button-icon" />
            <p className="menu-button-text">Log Out</p>
          </MenuButton>

          <div className="helpContainer">
            <AiOutlineCalendar className="helpContainer-icon" />
            <p className="helpContainer-text">¿Necesitas Ayuda?</p>
          </div>
        </MenuContaier>
      </MainContainer>
    </Wrapper>
  );
};

export default PrincipalMenu;
