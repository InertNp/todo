import React, { useState } from "react";
import { CircleClick } from "../style/Common";
import { CreateBar } from "../style/CreateBar";
import check from "../images/icon-check.svg";
import { v1 as uuid } from "uuid";
const CreateNew = ({ dark, addData }) => {
  const [inputText, setInputText] = useState("");
  return (
    <CreateBar dark={dark}>
      <CircleClick dark={dark}>
        <div
          className={`circle`}
          onClick={() => {
            setInputText("");
            addData({ text: inputText, id: uuid(), complete: false });
          }}
        ></div>
      </CircleClick>
      <div className="inputDiv">
        <input
          placeholder="Create a new TODO"
          maxLength={30}
          minLength={5}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </div>
      <div className="tick">
        {inputText && (
          <img
            src={check}
            alt={"check"}
            onClick={() => {
              setInputText("");
              addData({ text: inputText, id: uuid(), complete: false });
            }}
          />
        )}
      </div>
    </CreateBar>
  );
};

export default CreateNew;
