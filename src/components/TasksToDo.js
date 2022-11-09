import React from "react";

const TasksToDo = ({
  taskText,
  taskDate,
  priority,
  id,
  taskDone,
  checkboxValue,
}) => {
  return (
    <>
      <div className="singleTaskWrapper">
        <p className="taskToDoText">
          <strong>{taskText}</strong> - do {taskDate}
        </p>
        <button className="taskDoneBtn" onClick={() => taskDone(id)}>
          Zadanie wykonane
        </button>
      </div>
    </>
  );
};

export default TasksToDo;
