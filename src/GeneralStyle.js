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

export { GeneralStyle, SeparatorLine };
