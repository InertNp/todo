import CreateNew from "../components/CreateNew";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

import Lists from "./Lists";
const Container = ({
  dark,
  clicked,
  data,
  length,
  getState,
  mode,
  clearCompleted,
  addData,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <div className="allContainer">
      <div className="elementsContainer">
        <div className="info">
          <p>Todo</p>
          <div
            className="modeIcon"
            onClick={() => {
              clicked();
            }}
          >
            {dark ? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" />}
          </div>
        </div>

        <div className="createNewContainer">
          <CreateNew
            dark={dark}
            addData={(e) => {
              addData(e);
            }}
          />
        </div>
        {/*this is list of all lst container and filter container */}
        <div className="listsContainer">
          {data.length > 0 ? (
            <Lists
              dark={dark}
              data={data}
              length={length}
              getState={(e) => getState(e)}
              mode={mode}
              clearCompleted={() => clearCompleted()}
              completeTodo={(e) => completeTodo(e)}
              deleteTodo={(e) => deleteTodo(e)}
            />
          ) : (
            <div className="llContainer">Add Some Task!</div>
          )}
        </div>
        {/* this is not shown in pc */}
        <div className="filterContainer">
          <p
            onClick={() => getState("all")}
            className={`${mode === "all" ? "activeFilter" : ""}`}
          >
            All
          </p>
          <p
            onClick={() => getState("active")}
            className={`${mode === "active" ? "activeFilter" : ""}`}
          >
            Active
          </p>
          <p
            onClick={() => getState("complete")}
            className={`${mode === "complete" ? "activeFilter" : ""}`}
          >
            Completed
          </p>
        </div>

        <p className="btmp">Drag and Drop to reorder list </p>
      </div>
    </div>
  );
};

export default Container;
