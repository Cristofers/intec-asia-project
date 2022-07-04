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

  .title {
    display: block;
    font-weight: bolder;
    font-size: 20px;
    font-family: ${GeneralStyle.principalFont};
    width: 100%;
    text-align: left;
  }

  .calification-information-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .title {
      font-weight: bolder;
      font-family: ${GeneralStyle.principalFont};
    }

    .calification-table {
      display: flex;
      width: 100%;
      align-content: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      thead {
        width: 100%;
      }

      tbody {
        width: 100%;
      }

      tr {
        display: flex;
        justify-content: space-between;
        width: 100%;

        td {
          width: 50%;
          text-align: center;
          border: 1px solid black;
        }
      }
    }
  }
`;

export const GenerarInformationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin-bottom: 10px;

    .form-selection {
      border: 2px solid black;
      border-radius: 10px;
      padding: 2px;
      width: 50%;
    }

    button {
      display: block;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      background-color: gray;
      box-shadow: 0 3px 0 black;
      border: 0;
      border-radius: 25px;
      padding: 5px;
      text-decoration: none;
      color: white;
    }
  }
`;

export const AcademicIndexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;

  .calification {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 50px;
    border: 2.5px solid ${GeneralStyle.principalColor};
    border-radius: 50%;
  }

  p {
    width: 100%;
    text-align: center;
  }
`;
