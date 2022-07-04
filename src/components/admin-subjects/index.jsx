import React from "react";
import Layout from "../layout";
import { BsPencilSquare } from "react-icons/bs";
import { MainContainer, SubjectContainer } from "./style";

const AdminSubjects = () => {
  return (
    <Layout title={"Administrar Asignaturas"} Icon={BsPencilSquare}>
      <MainContainer>
        <form className="search-subject">
          <label htmlFor="subject">Buscar Asignatura</label>
          <input type="text" name="subject" />
          <button>Buscar</button>
        </form>
        <p className="subject-informacion-title">Informacion de Asignatura</p>
        <SubjectContainer>
          <form>
            <label htmlFor="subjectCode">
              <p>Código asignatura</p>
              <input type="text" autoComplete="off" name="subjectCode" />
            </label>
            <label htmlFor="teacher">
              <p>Profesor encargado</p>
              <input type="text" autoComplete="off" name="teacher" />
            </label>
            <label htmlFor="section">
              <p>Sección</p>
              <input type="text" autoComplete="off" name="section" />
            </label>
            <label htmlFor="estudentsCount">
              <p>Cantidad estudiantes</p>
              <input type="text" autoComplete="off" name="estudentsCount" />
            </label>
            <label htmlFor="Time">
              <p>Horarios</p>
              <input type="text" autoComplete="off" name="Time" />
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

export default AdminSubjects;
