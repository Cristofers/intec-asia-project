import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  color: black;
  width: 100%;
  overflow: hidden;

  .principal-information-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    .user-name {
      margin-left: 20px;
      font-size: 36px;
      font-family: ${GeneralStyle.principalFont};
    }
  }

  .secundary-information-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const GenerarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 45%;
  background-color: gray;
  border-radius: 10px;
  align-content: flex-start;

  .title {
    width: 100%;
    font-size: 30px;
    font-family: ${GeneralStyle.principalFont};
    display: block;
    text-align: left;
    padding-left: 10px;
    border-left: 5px solid ${GeneralStyle.principalColor};
  }

  p,
  h3 {
    width: 100%;
    font-family: ${GeneralStyle.principalFont};
  }

  .information-title {
    font-size: 25px;
  }

  .information-data {
    font-size: 20px;
  }
`;
