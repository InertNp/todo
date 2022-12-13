import { useState } from "react";

import Container from "./containers/Container";
import { data } from "./data";
import { MainContainer } from "./style/ContainerStyle";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [savedData, setSavedData] = useState(data);

  const [activeData] = useState(savedData.filter((e) => e.complete === false));
  const [mode, setMode] = useState("all");

  //useState
  useState(() => {}, [savedData]);
  //functions
  function clearCompleted() {
    setSavedData(savedData.filter((e) => e.complete === false));
  }
  function addData(e) {
    const hehe = [e, ...savedData];
    setSavedData(hehe);
  }
  function completeTodo(e) {
    savedData.map((a) => {
      if (a.id === e) {
        if (!a.complete) {
          a.complete = true;
        } else {
          a.complete = false;
        }
        return a;
      }
      return a;
    });
  }
  function deleteTodo(e) {
    setSavedData(savedData.filter((a) => a.id !== e));
  }
  //render
  return (
    <MainContainer dark={darkMode}>
      <Container
        dark={darkMode}
        data={savedData}
        length={activeData.length}
        getState={(e) => {
          setMode(e);
        }}
        mode={mode}
        clicked={() => {
          darkMode ? setDarkMode(false) : setDarkMode(true);
        }}
        clearCompleted={() => clearCompleted()}
        addData={(e) => addData(e)}
        completeTodo={(e) => {
          completeTodo(e);
        }}
        deleteTodo={(e) => deleteTodo(e)}
      />
    </MainContainer>
  );
}

export default App;
