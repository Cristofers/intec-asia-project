import React from "react";
import { Container } from "./style";

const Wrapper = ({ children, imageBG }) => {
  return <Container imageBG={imageBG}>{children}</Container>;
};

export default Wrapper;
