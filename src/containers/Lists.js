import List from "../components/List";
const Lists = ({
  dark,
  data,
  length,
  getState,
  mode,
  clearCompleted,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <div className="lContainer">
      <div className="lists">
        {data.map((e) => {
          return (
            <List
              data={e}
              dark={dark}
              key={e.id}
              completeTodo={(e) => {
                completeTodo(e);
              }}
              deleteTodo={(e) => {
                deleteTodo(e);
              }}
            />
          );
        })}
      </div>
      <div className="btmLcontainer">
        <p className="itemsLeft">{length} items left</p>
        <div className="filter">
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
        <p className="clear" onClick={() => clearCompleted()}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default Lists;
