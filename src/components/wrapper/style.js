import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => (props.imageBG ? props.imageBG : "#")});
  width: 100%;
  height: 100vh;
`;
