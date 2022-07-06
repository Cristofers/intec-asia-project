import React from "react";
import Layout from "../layout";
import { MainContainer } from "./style";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ModifySubject = () => {
  return (
    <Layout
      title={"Modificar Selección"}
      Icon={BsFillPencilFill}
      imageWrapperBG="https://fastly.4sqi.net/img/general/600x600/41014375_uk13e70GiFvyb-uAA8W1XzUBJVpD1012GMZhdhcRQJc.jpg"
    >
      <MainContainer>
        <p className="title">Trimestre “Trimestre actual”</p>
        <div className="button-container">
          <button>
            <Link to="/add-subject">Agregar Asignaturas </Link>
          </button>

          <button>Guardar Cambios</button>
        </div>

        <table className="subjects-table">
          <thead>
            <tr>
              <td>Código</td>
              <td>Créditos</td>
              <td>Profesor</td>
              <td>Horario</td>
              <td>Retirar</td>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>IDS340-1</td>
              <td>4</td>
              <td>[Nombre_Profesor]</td>
              <td>[Fecha]</td>
              <td>
                <button>Retirar</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </MainContainer>
    </Layout>
  );
};

export default ModifySubject;
