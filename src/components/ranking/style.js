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

  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    .form-selection {
      border: 2px solid black;
      border-radius: 10px;
      padding: 2px;
      margin: 0 10px;
    }

    button {
      display: block;
      min-width: 100px;
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

  .raking {
    display: flex;
    width: 100%;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    thead {
      width: 100%;
      font-weight: bold;
    }

    tbody {
      width: 100%;
      max-height: 500px;
      overflow-y: overlay;
    }

    tr {
      display: flex;
      justify-content: space-between;
      width: 100%;

      td {
        width: 50%;
        text-align: center;
        border: 1px solid black;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
`;
