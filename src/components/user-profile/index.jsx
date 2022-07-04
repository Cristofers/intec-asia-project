import React from "react";
import Layout from "../layout";
import { BiUser } from "react-icons/bi";
import { MainContainer, GenerarContainer } from "./style";
import UserImage from "../user-image";

const UserProfile = () => {
  return (
    <Layout
      title={"Perfil de Usuario"}
      Icon={BiUser}
      imageWrapperBG="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/18204332/estudiar.jpg"
    >
      <MainContainer>
        <div className="principal-information-container">
          <UserImage size="75" />
          <div className="user-name">"Nombre de usuario"</div>
        </div>
        <div className="secundary-information-container">
          <GenerarContainer>
            <h2 className="title">Datos Generales</h2>
            <h3 className="information-title">Edad:</h3>
            <p className="information-data">36</p>
            <h3 className="information-title">Correo:</h3>
            <p className="information-data">exampleEmail@gmail.com</p>
            <h3 className="information-title">País:</h3>
            <p className="information-data">Example Country</p>
            <h3 className="information-title">Ciudad:</h3>
            <p className="information-data">Example City</p>
          </GenerarContainer>
          <GenerarContainer>
            <h2 className="title">Detalles de curso</h2>
            <h3 className="information-title">Cursando actualmente:</h3>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
            <p className="information-data">“curso activo al momento”</p>
          </GenerarContainer>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default UserProfile;
