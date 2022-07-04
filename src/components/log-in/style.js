import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const MainForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
  min-height: 500px;
  padding: 20px 10px;
  display: flex;
  border: 1px solid ${GeneralStyle.principalColor};
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  font-family: ${GeneralStyle.principalFont};

  p {
    font-size: 20px;
    margin: 5px 0px;
  }

  .form-title {
    color: ${GeneralStyle.principalColor};
    font-size: 40px;
    outline: black;
    /* text-decoration: underline; */
  }

  .form-label {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .form-item {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Raleway", sans-serif;
    padding: 5px;
    margin-bottom: 2rem;
    height: 30px;
    width: 90%;
    /* border: 1px solid grey; */
    border: 2px solid ${GeneralStyle.principalColor};
    background-color: white;
    border-radius: 25px;
  }

  .form-button {
    min-width: 300px;
    text-align: center;
    padding: 10px;
    transition: 0.25s;
    color: ${GeneralStyle.principalColor};
    background-color: white;
    border: 3px solid ${GeneralStyle.principalColor};
    border-radius: 25px;
    font-size: 24px;

    &:hover {
      padding: 10px 20px;
      min-width: 350px;
    }
  }
`;

export const HiperLink = styled(Link)`
  font-size: 30px;
  margin-bottom: 20px;
  color: ${GeneralStyle.principalColor};
`;
