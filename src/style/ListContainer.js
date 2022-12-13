import styled from "styled-components";

export const ListBar = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
  border-bottom: 1px solid;
  border-color: ${(a) => {
    if (a.dark) {
      return "hsl(237, 14%, 26%)";
    } else {
      return "hsl(236, 33%, 92%)";
    }
  }};
  background-color: ${(a) => {
    if (a.dark) {
      return " hsl(235, 24%, 19%)";
    } else {
      return "hsl(0, 0%, 98%)";
    }
  }};

  .inputDiv {
    width: 80%;
  }
  .inputDiv .p {
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    /* border: 2px solid red; */
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
  .inputDiv .p:hover {
    color: ${(a) => {
      if (a.dark) {
        return "hsl(0, 0%, 98%)";
      } else {
        return "hsl(235, 21%, 11%)";
      }
    }};
  }
  .completeBar {
    text-decoration: line-through;
    color: ${(a) => {
      if (a.dark) {
        return "hsl(233, 11%, 54%);";
      } else {
        return "hsl(233, 11%, 84%);";
      }
    }};
  }
  .crossContainer {
    /* background-color: blue; */
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      width: 10%;
    }
  }
  .crossContainer img {
    width: 30%;
  }
  .crossContainer img:hover {
  }
`;
