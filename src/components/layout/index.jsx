import React from "react";
import { SeparatorLine } from "../../GeneralStyle";
import Wrapper from "../wrapper";
import { Container } from "./style";

const Layout = ({ children, title, Icon, imageWrapperBG }) => {
  return (
    <Wrapper imageBG={imageWrapperBG ? imageWrapperBG : "#"}>
      <Container>
        <h1 className="title">
          {Icon ? <Icon className="title-icon" /> : ""}
          {title}
        </h1>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
