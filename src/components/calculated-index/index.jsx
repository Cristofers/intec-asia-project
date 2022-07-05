import React from "react";
import Layout from "../layout";
import {
  MainContainer,
  AcademicIndexContainer,
  GenerarInformationContainer,
} from "./style";
import { AiFillCalculator } from "react-icons/ai";

const CalculatedIndex = () => {
  return (
    <Layout
      title={"Cálculo de índice académico"}
      Icon={AiFillCalculator}
      imageWrapperBG="https://thumbs.dreamstime.com/b/fondo-de-pantalla-n%C3%BAmeros-dispersos-para-el-papel-tapiz-uso-en-segundo-plano-o-con-dise%C3%B1os-dise%C3%B1o-la-creaci%C3%B3n-contenido-166001346.jpg"
    >
      <MainContainer>
        <p className="title">Carrera “Carrera del estudiante”</p>
        <GenerarInformationContainer>
          <form>
            <label htmlFor="trimestry">Seleccionar Periodo</label>
            <select name="trimestry" className="form-selection">
              <option value="Trimestre Actual">Trimestre Actual</option>
            </select>
            <button>Generar Reporte</button>
          </form>

          <AcademicIndexContainer>
            <div className="calification">4</div>
            <p>Índice Académico</p>
          </AcademicIndexContainer>
        </GenerarInformationContainer>

        <div className="calification-information-container">
          <p className="title">Resumen por trimestre:</p>
          <table className="calification-table">
            <thead>
              <tr>
                <td>Trimestre</td>
                <td>Creditos</td>
                <td>Condición</td>
                <td>Índice del trimestre</td>
              </tr>
            </thead>
          </table>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default CalculatedIndex;
