import React from "react";
import Layout from "../layout";
import { BsPencilSquare } from "react-icons/bs";
import { MainContainer, SubjectContainer } from "./style";

const AdminTeachers = () => {
  return (
    <Layout
      title={"Administrar Profesores"}
      Icon={BsPencilSquare}
      imageWrapperBG="https://plustatic.com/5550/conversions/tipos-profesores-default.jpg"
    >
      <MainContainer>
        <form className="search-subject">
          <label htmlFor="subject">Buscar Profesor</label>
          <input type="text" name="subject" />
          <button>Buscar</button>
        </form>
        <p className="subject-informacion-title">Informacion de Profesor</p>
        <SubjectContainer>
          <form>
            <label htmlFor="subjectCode">
              <p>Asignatura/as</p>
              <input type="text" autoComplete="off" name="subjectCode" />
            </label>
            <label htmlFor="teacher">
              <p>Secciones a su cargo</p>
              <input type="text" autoComplete="off" name="teacher" />
            </label>
            <label htmlFor="section">
              <p>Días de trabajo</p>
              <input type="text" autoComplete="off" name="section" />
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

export default AdminTeachers;
