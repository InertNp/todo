import React, { useState } from "react";
import { CircleClick } from "../style/Common";
import { ListBar } from "../style/ListContainer";
import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";
const List = ({ dark, data, completeTodo, deleteTodo }) => {
  const [hover, setHover] = useState(false);
  return (
    <ListBar
      dark={dark}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <CircleClick dark={dark}>
        <div
          className={data.complete ? "completeTick" : "circle"}
          onClick={() => {
            completeTodo(data.id);
          }}
        >
          <img src={check} alt={"check"} />
        </div>
      </CircleClick>
      <div className="inputDiv">
        <p className={data.complete ? "completeBar" : "p"}>{data.text}</p>
      </div>

      <div className="crossContainer">
        {hover && (
          <img
            src={cross}
            alt="X"
            onClick={() => {
              deleteTodo(data.id);
            }}
          />
        )}
      </div>
    </ListBar>
  );
};

export default List;
