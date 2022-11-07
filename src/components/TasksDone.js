import React from "react";

const TasksDone = ({ id, taskText, taskDate, tasksDoneLength }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <div className="taskDoneWrapper">
      <p>
        {taskText}
        <br />
        Zrobić do : {taskDate}
        <br />
        Potwierdzenie wykonania: {day} : {month} : {year}
      </p>
    </div>
  );
};

export default TasksDone;
