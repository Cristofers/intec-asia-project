import React from "react";
import { SeparatorLine } from "../../GeneralStyle";
import Wrapper from "../wrapper";
import { Container } from "./style";

const Layout = ({ children, title, Icon }) => {
  return (
    <Wrapper imageBG="https://www.intec.edu.do/media/zoo/images/INTEC-1_b019455595461015795efdb01fe78d3c.jpg">
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
