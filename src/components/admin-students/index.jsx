import React from "react";
import Layout from "../layout";
import { BsPencilSquare } from "react-icons/bs";
import { MainContainer, SubjectContainer } from "./style";

const AdminStudents = () => {
  return (
    <Layout
      title={"Administrar Estudiantes"}
      Icon={BsPencilSquare}
      imageWrapperBG="https://www.compartirpalabramaestra.org/sites/default/files/me-gustan-los-profesores-que-lo-meten-en-la-pelicula.jpg"
    >
      <MainContainer>
        <form className="search-subject">
          <label htmlFor="subject">Buscar Estudiante</label>
          <input type="text" name="subject" />
          <button>Buscar</button>
        </form>
        <p className="subject-informacion-title">Informacion de Profesor</p>
        <SubjectContainer>
          <form>
            <label htmlFor="subjectCode">
              <p>ID estudiante</p>
              <input type="text" autoComplete="off" name="subjectCode" />
            </label>
            <label htmlFor="trimestry">
              <p>Trimestre en curso</p>
              <input type="text" autoComplete="off" name="trimestry" />
            </label>
            <label htmlFor="section">
              <p>Cantidad de asignaturas en curso</p>
              <input type="text" autoComplete="off" name="section" />
            </label>
            <label htmlFor="career">
              <p>Carrera</p>
              <input type="text" autoComplete="off" name="career" />
            </label>
            <input
              type="submit"
              value="Guardar"
              className="subject-submit-button"
            />
          </form>
        </SubjectContainer>
      </MainContainer>
    </Layout>
  );
};

export default AdminStudents;
