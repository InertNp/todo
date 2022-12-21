import { useState } from "react";

import Container from "./containers/Container";
import { data } from "./data";
import { MainContainer } from "./style/ContainerStyle";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [savedData, setSavedData] = useState(data);
  const [activeData, setActiveData] = useState(
    savedData.filter((e) => e.complete === false)
  );
  const [mode, setMode] = useState("all");
  const [sendData, setSendData] = useState(savedData);
  //useState
  console.log(sendData);
  useState(() => {}, [savedData, mode, activeData]);
  //functions

  function clearCompleted() {
    setSavedData(savedData.filter((e) => e.complete === false));
    setSendData(savedData.filter((e) => e.complete === false));
  }
  function addData(e) {
    const hehe = [e, ...savedData];
    setSavedData(hehe);
    setSendData(hehe);
    setActiveData(hehe.filter((e) => e.complete === false));
  }
  function completeTodo(e) {
    savedData.map((a) => {
      if (a.id === e) {
        if (!a.complete) {
          a.complete = true;
        } else {
          //this code is to make complete false
          a.complete = false;
        }

        return a;
      }

      return a;
    });
  }
  function deleteTodo(e) {
    setSavedData(savedData.filter((a) => a.id !== e));
    setSendData(savedData.filter((a) => a.id !== e));
  }
  function updateData() {
    setActiveData(savedData.filter((e) => e.complete === false));
  }
  //render
  return (
    <MainContainer dark={darkMode}>
      <Container
        dark={darkMode}
        data={sendData}
        length={activeData.length}
        getState={(e) => {
          setMode(e);
          console.log(e);
          if (e === "complete") {
            setSendData(savedData.filter((e) => e.complete === true));
          } else if (e === "active") {
            setSendData(savedData.filter((e) => e.complete === false));
          } else {
            setSendData(savedData);
          }
        }}
        mode={mode}
        clicked={() => {
          darkMode ? setDarkMode(false) : setDarkMode(true);
        }}
        clearCompleted={() => clearCompleted()}
        addData={(e) => {
          addData(e);
        }}
        completeTodo={(e) => {
          completeTodo(e);
          updateData();
        }}
        deleteTodo={(e) => {
          deleteTodo(e);
          updateData();
        }}
      />
    </MainContainer>
  );
}

export default App;
