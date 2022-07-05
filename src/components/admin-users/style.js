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

  .subjects-table {
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

      .user-container,
      .user-permission-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
          margin: 0 25px;
        }
      }

      .user-permission {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
