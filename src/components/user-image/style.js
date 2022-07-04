import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  height: ${(props) => (props.size ? props.size : "10")}px;
  width: ${(props) => (props.size ? props.size : "10")}px;
  overflow: hidden;
  margin: 0;

  .user-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
