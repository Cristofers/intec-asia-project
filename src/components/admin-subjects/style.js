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
  min-height: 350px;

  .search-subject {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;

    input {
      width: 60%;
    }
    button {
      width: 15%;
    }
  }

  .subject-informacion-title {
    font-family: ${GeneralStyle.principalFont};
    font-size: 30px;
  }
`;

export const SubjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;

  form {
    background-color: #e5e5e5;
    padding: 10px;
    width: 100%;
    border-radius: 10px;

    label {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
      font-size: 20px;
      font-family: ${GeneralStyle.principalFont};

      p {
        width: 35%;
      }

      input {
        width: 25%;
        background-color: white;
        padding: 2px 5px;
        border-radius: 5px;
      }
    }
  }

  .subject-submit-button {
    display: block;
    margin-left: auto;
    min-width: 100px;
    text-align: center;
    background-color: gray;
    box-shadow: 0 3px 0 black;
    border: 0;
    border-radius: 25px;
    padding: 10px;
    text-decoration: none;
    color: white;
  }
`;
