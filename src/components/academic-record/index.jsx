import React from "react";
import { BsFillBookFill } from "react-icons/bs";
import { MainContainer } from "./style";
import Layout from "../layout";

const AcademicRecord = () => {
  return (
    <Layout
      title={"Historial Academico"}
      Icon={BsFillBookFill}
      imageWrapperBG="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/18204332/estudiar.jpg"
    >
      <MainContainer>
        <p className="title">Reporte de Historial Académico</p>
        <form>
          <label htmlFor="trimestry">Seleccionar Periodo</label>
          <select name="trimestry" className="form-selection">
            <option value="Trimestre Actual">Trimestre Actual</option>
          </select>
          <button>Generar Reporte</button>
        </form>

        <div className="calification-information-container">
          <table className="calification-table">
            <thead>
              <tr>
                <td>Nombre de Clase</td>
                <td>Calificación</td>
              </tr>
            </thead>
          </table>

          <div className="calification-container">
            <div className="calification">4</div>
            <p>Índice Académico</p>
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default AcademicRecord;
