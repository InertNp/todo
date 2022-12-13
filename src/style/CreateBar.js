import styled from "styled-components";

export const CreateBar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(a) => {
    if (a.dark) {
      return " hsl(235, 24%, 19%)";
    } else {
      return "hsl(0, 0%, 98%)";
    }
  }};
  border-radius: 5px;
  .inputDiv {
    width: 80%;
  }
  .inputDiv input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
    color: ${(a) => {
      if (a.dark) {
        return "hsl(234, 39%, 85%)";
      } else {
        return "hsl(235, 19%, 35%)";
      }
    }};
  }
  .tick {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tick img {
    width: 50%;
    color: ${(a) => {
      if (a.dark) {
        return "hsl(235, 19%, 35%)";
      } else {
        return "hsl(234, 39%, 95%)";
      }
    }};
  }
`;
