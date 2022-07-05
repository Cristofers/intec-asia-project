import React from "react";
import Layout from "../layout";
import { MainContainer } from "./style";
import { BsFillPencilFill } from "react-icons/bs";
import UserImage from "../user-image";

const AdminUsers = () => {
  return (
    <Layout
      title={"Asignar Permisos"}
      Icon={BsFillPencilFill}
      imageWrapperBG="https://fastly.4sqi.net/img/general/600x600/41014375_uk13e70GiFvyb-uAA8W1XzUBJVpD1012GMZhdhcRQJc.jpg"
    >
      <MainContainer>
        <p className="title">Permisos</p>
        <table className="subjects-table">
          <thead>
            <tr>
              <td>Usuario</td>
              <td>Permisos</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="user-container">
                <UserImage size={30} />
                <p>[Correo_Usuario]</p>
              </td>
              <td className="user-permission-container">
                <select className="user-permission">
                  <option value="1">Usuario</option>
                  <option value="2">Profesor</option>
                  <option value="1">Estudiante</option>
                  <option value="1">Administradr</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </MainContainer>
    </Layout>
  );
};

export default AdminUsers;
