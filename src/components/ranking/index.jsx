import React from "react";
import Layout from "../layout";
import { MainContainer } from "./style";
import { BiBarChartAlt2 } from "react-icons/bi";

const Ranking = () => {
  return (
    <Layout
      title={"Ranking"}
      Icon={BiBarChartAlt2}
      imageWrapperBG="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/18204332/estudiar.jpg"
    >
      <MainContainer>
        <form>
          <label htmlFor="trimestry">Seleccionar grupo</label>
          <select name="trimestry" className="form-selection">
            <option value="Trimestre Actual">IDS333-03</option>
          </select>
          <button>Generar Ranking</button>
        </form>
        <p className="title">Ranking de desempeño</p>

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
      </MainContainer>
    </Layout>
  );
};

export default Ranking;
