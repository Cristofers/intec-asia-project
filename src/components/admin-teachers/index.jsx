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
          <label htmlFor="teacher">Buscar Profesor</label>
          <input type="text" name="teacher" />
          <button>Buscar</button>
        </form>
        <p className="subject-informacion-title">Informacion de Profesor</p>
        <SubjectContainer>
          <form>
            <label htmlFor="subjectCode">
              <p>Asignatura/as</p>
              <input type="text" autoComplete="off" name="subjectCode" />
            </label>
            <label htmlFor="sections-charge">
              <p>Secciones a su cargo</p>
              <input type="text" autoComplete="off" name="sections-charge" />
            </label>
            <label htmlFor="work-days">
              <p>Días de trabajo</p>
              <input type="text" autoComplete="off" name="work-days" />
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
