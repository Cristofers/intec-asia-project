import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Container = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 45%;
  background-color: ${GeneralStyle.principalColor};
  padding: 10px 2px 2px;
  color: white;
  border-radius: 10px;

  .title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;

    .title-icon {
      font-size: 40px;
    }
  }
`;
