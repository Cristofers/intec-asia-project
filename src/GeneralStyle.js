import styled from "styled-components";

const GeneralStyle = {
  principalColor: "#CF1912",
  principalFont: "Roboto",
};

const SeparatorLine = styled.div`
  width: 90%;
  height: 0px;
  margin: 0;
  padding: 0;
  margin: 10px 0px;
  background-color: ${GeneralStyle.principalColor};
  border: 1px solid ${GeneralStyle.principalColor};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => (props.imageBG ? props.imageBG : "#")});
  width: 100%;
  height: 100vh;
`;

export { GeneralStyle, SeparatorLine, Wrapper };
