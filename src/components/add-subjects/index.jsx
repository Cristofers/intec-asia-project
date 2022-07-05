import React from "react";
import Layout from "../layout";
import { MainContainer } from "./style";
import { BsFillPencilFill } from "react-icons/bs";

const AddSubject = () => {
  return (
    <Layout
      title={"Seleccionar Asignaturas"}
      Icon={BsFillPencilFill}
      imageWrapperBG="https://fastly.4sqi.net/img/general/600x600/41014375_uk13e70GiFvyb-uAA8W1XzUBJVpD1012GMZhdhcRQJc.jpg"
    >
      <MainContainer>
        <p className="title">Trimestre “Trimestre actual”</p>
        <form className="search-subject">
          <label htmlFor="subject">Buscar Estudiante</label>
          <input type="text" name="subject" />
          <button>Buscar</button>
        </form>
        <table className="subjects-table">
          <thead>
            <tr>
              <td>Código</td>
              <td>Créditos</td>
              <td>Profesor</td>
              <td>Horario</td>
              <td>Cupos</td>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>IDS340-1</td>
              <td>4</td>
              <td>[Nombre_Profesor]</td>
              <td>[Fecha]</td>
              <td>7/40</td>
            </tr> */}
          </tbody>
        </table>
      </MainContainer>
    </Layout>
  );
};

export default AddSubject;
