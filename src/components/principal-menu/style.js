import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  min-height: 500px;
  background-color: red;
  padding: 5px;
  border-radius: 10px;
`;

export const InfoContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  min-width: 65%;
  background-color: white;
  padding: 20px;
  border-bottom-left-radius: inherit;
  border-top-left-radius: inherit;

  .user-image-container {
    position: relative;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    overflow: hidden;
    margin: 0 auto;

    .user-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .user-name {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-family: ${GeneralStyle.principalFont};
    font-size: 36px;
  }

  .wellcome-text-container {
    background-image: url("https://www.intec.edu.do/media/zoo/images/INTEC-1_b019455595461015795efdb01fe78d3c.jpg");
    border-radius: 10px;
    padding: 10px;

    .wellcome-text {
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 10px;
      padding: 10px;
      font-family: ${GeneralStyle.principalFont};
      font-size: 25px;
    }
  }

  .important-information-container {
    .important-information-header {
      color: ${GeneralStyle.principalColor};
      font-family: ${GeneralStyle.principalFont};
      font-size: 48px;
      text-align: center;
    }
  }

  .important-information {
    display: flex;
    background-color: rgba(200, 200, 200, 0.7);
    border-radius: 10px;

    .important-information-element {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: black;
      width: 50%;

      .important-information-element-icon {
        font-size: 50px;
        color: ${GeneralStyle.principalColor};
      }

      p {
        text-align: center;
        width: 100%;
        font-family: ${GeneralStyle.principalFont};
        font-size: 20px;
      }

      .important-information-element-important-text {
        font-size: 50px;
        color: ${GeneralStyle.principalColor};
      }
    }
  }
`;

export const MenuContaier = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  min-width: 20%;
  background-color: white;
  border-left: 2px solid black;
  padding: 10px;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;

  .helpContainer {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: ${GeneralStyle.principalFont};

    .helpContainer-icon {
      color: ${GeneralStyle.principalColor};
      font-size: 50px;
    }

    .helpContainer-text {
      color: black;
    }
  }
`;

export const MenuButton = styled(Link)`
  width: 80%;
  height: 75px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: gray;
  box-shadow: 0 5px 0 black;
  border-radius: 25px;
  padding: 10px;
  text-decoration: none;

  .menu-button-icon {
    font-size: 75px;
    text-align: center;
  }

  .menu-button-text {
    font-size: 20px;
    text-align: right;
    font-family: ${GeneralStyle.principalFont};
  }
`;
