import React from "react";
import { AiFillCalculator } from "react-icons/ai";
import {
  MainContainer,
  StudentInformationContainer,
  RankingContainer,
} from "./style";
import Layout from "../layout";

const StudentsRanking = () => {
  return (
    <Layout
      title={"Agregar Calificaciones"}
      Icon={AiFillCalculator}
      imageWrapperBG="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/18204332/estudiar.jpg"
    >
      <MainContainer>
        <StudentInformationContainer>
          <p className="title">Trimestre “Trimestre actual”</p>
          <form>
            <div className="formBox">
              <div className="label-container">
                <label htmlFor="class">Seleccionar asignatura</label>
                <select name="class" className="form-selection">
                  <option value="IDS323 - 01">IDS323 - 01</option>
                </select>
              </div>
              <div className="label-container">
                <label htmlFor="student">Seleccionar Estudiante</label>
                <select name="student" className="form-selection">
                  <option value="Estudiante">Estudiante</option>
                </select>
              </div>
            </div>
            <div className="formBox">
              <div className="label-container">
                <label htmlFor="record">Seleccionar Estudiante</label>
                <select name="record" className="form-selection">
                  <option value="Estudiante">Estudiante</option>
                </select>
              </div>
              <button>Guardar calificación</button>
            </div>
          </form>
        </StudentInformationContainer>
        <RankingContainer>
          <table className="raking">
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Calificacion</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1104369</td>
                <td>Cristofers Valdez Quintin</td>
                <td>98</td>
              </tr>
            </tbody>
          </table>
        </RankingContainer>
      </MainContainer>
    </Layout>
  );
};

export default StudentsRanking;
