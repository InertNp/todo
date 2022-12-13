import styled from "styled-components";

export const CircleClick = styled.div`
  /* border: white 2px solid; */
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 768px) {
    width: 10%;
  }

  .circle {
    height: 25px;
    width: 25px;
    border: 2px solid hsl(235, 21%, 11%);
    border-radius: 100%;
    background-color: transparent;
  }
  .circleL {
    height: 25px;
    width: 25px;
    border: 2px solid hsl(220, 98%, 81%);
    border-radius: 100%;
    background-color: transparent;
  }
  .circle:hover {
    background-color: transparent;
    border-color: hsl(220, 98%, 61%);
  }
  .circleL:hover {
    background-color: transparent;
    border-color: hsl(220, 98%, 61%);
  }
  .completeTick {
    height: 30px;
    width: 30px;
    /* border: 2px solid gray; */
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
  .completeTick img {
    width: 40%;
  }
  .circle img {
    visibility: hidden;
  }
`;
