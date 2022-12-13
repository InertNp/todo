import styled from "styled-components";
import bgDesktopDark from "../images/bg-desktop-dark.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
import bgDesktoplight from "../images/bg-desktop-light.jpg";
import bgMobilelight from "../images/bg-mobile-light.jpg";
export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(a) => {
    if (a.dark) {
      return "hsl(235, 21%, 10%)";
    } else {
      return "hsl(0, 0%, 98%)";
    }
  }};
  color: ${(a) => {
    if (a.dark) {
      return "hsl(234, 39%, 85%)";
    } else {
      return "hsl(235, 19%, 35%)";
    }
  }};
  display: flex;
  flex-direction: row;

  /* @media (max-width: 768px) {
    flex-direction: column;
  } */

  .allContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: ${(a) => {
      if (a.dark) {
        return `url(${bgMobileDark})`;
      } else {
        return `url(${bgMobilelight})`;
      }
    }};
    background-size: 100% 30%;
    background-repeat: no-repeat;
    background-position: top;
    @media (min-width: 768px) {
      background-image: ${(a) => {
        if (a.dark) {
          return `url(${bgDesktopDark})`;
        } else {
          return `url(${bgDesktoplight})`;
        }
      }};
      background-size: 100% 40%;
    }
  }

  .elementsContainer {
    width: 90%;
    height: 100%;
    /* border: 2px solid red; */
    @media (min-width: 768px) {
      width: 40%;
    }
  }
  .info {
    padding-top: 10%;
    width: 100%;
    height: 10%;
    /* background: #000; */
    color: hsl(0, 0%, 98%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 5px;
  }
  .modeIcon {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: end;
    /* border: 2px solid red; */
    @media (min-width: 768px) {
      width: 8%;
    }
  }
  .modeIcon img {
    height: 33%;
  }
  /// info finish //20% taken by info
  .createNewContainer {
    width: 100%;
    height: 8%;
    /* border: 2px solid blue; */
    margin-top: 5%;
  }
  // 8% taken by new contaner so total =28
  .listsContainer {
    margin-top: 5%;
    width: 100%;
    height: 45%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px
      ${(a) => {
        if (a.dark) {
          return "hsl(235, 21%, 5%)";
        } else {
          return "hsl(233, 11%, 84%)";
        }
      }};
    @media (min-width: 768px) {
      height: 50%;
    }
  }
  //for no list
  .llContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    font-size: 20px;
    align-items: center;
    color: ${(a) => {
      if (a.dark) {
        return "hsl(234, 39%,100%)";
      } else {
        return "hsl(235, 19%, 5%)";
      }
    }};
    background-color: ${(a) => {
      if (a.dark) {
        return " hsl(235, 24%, 19%)";
      } else {
        return "hsl(0, 0%, 98%)";
      }
    }};
  }
  .lContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    background-color: ${(a) => {
      if (a.dark) {
        return " hsl(235, 24%, 19%)";
      } else {
        return "hsl(0, 0%, 98%)";
      }
    }};
  }
  .lists {
    /* border: 2px solid red; */
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    overflow-y: scroll;
    overflow-x: hidden;
  }
  .lists::-webkit-scrollbar {
    width: 8px;
  }
  //50+28+5=83
  // this conmtainer is for items left and clear
  .btmLcontainer {
    /* border: 2px solid red; */
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${(a) => {
      if (a.dark) {
        return " hsl(235, 24%, 19%)";
      } else {
        return "hsl(0, 0%, 98%)";
      }
    }};
  }
  .btmLcontainer p {
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
  }
  .clear:hover {
    color: ${(a) => {
      if (a.dark) {
        return "hsl(234, 39%, 85%)";
      } else {
        return "hsl(235, 19%, 35%)";
      }
    }};
  }
  .itemsLeft:hover {
    color: ${(a) => {
      if (a.dark) {
        return "hsl(234, 39%, 85%)";
      } else {
        return "hsl(235, 19%, 35%)";
      }
    }};
  }
  //this is for filter container in phone
  .filterContainer {
    background-color: ${(a) => {
      if (a.dark) {
        return " hsl(235, 24%, 19%)";
      } else {
        return "hsl(0, 0%, 98%)";
      }
    }};
    height: 7%;
    width: 100%;
    display: flex;
    margin-top: 5%;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .filter {
    display: none;
    /* background-color: green; */

    @media (min-width: 768px) {
      display: flex;
      width: 40%;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
  .activeFilter {
    color: hsl(220, 98%, 61%);
  }

  .btmp {
    margin-top: 5%;
    text-align: center;
  }
`;
