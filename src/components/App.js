import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask.js";
import TasksToDo from "./TasksToDo.js";
import TasksDone from "./TasksDone.js";

class ToDoApp extends Component {
  state = {
    inputTextValue: "",
    inputDateValue: "",
    checkboxValue: false,
    tasksLength: "",
  };
  handleOnChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.checked);
    if (e.target.name === "checkboxValue") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  tasksDone = [];
  tasks = [];

  addTask = () => {
    if (this.state.inputTextValue === "" || this.state.inputDateValue === "") {
      alert("Aby dodać nowe zadanie najpierw uzupełnij wszystkie pola");
      return;
    }
    const task = {
      taskText: this.state.inputTextValue,
      taskDate: this.state.inputDateValue,
      prioritized: this.state.checkBoxValue,
    };
    this.tasks.push(task);
    this.setState({
      tasksLength: this.tasks.length,
    });
  };
  moveToTaskDone = (id) => {
    this.tasksDone.push(this.tasks[id]);
    this.tasks.splice(id, 1);
    this.setState({
      tasksLength: this.tasks.length,
    });
  };

  render() {
    const { inputDateValue, inputTextValue, checkboxValue } = this.state;
    const tasks = this.tasks.map((task, index) => (
      <TasksToDo
        key={Math.floor(Math.random() * 100000)}
        id={index}
        taskText={task.taskText}
        taskDate={task.taskDate}
        priority={task.prioritized}
        taskDone={this.moveToTaskDone}
      />
    ));
    const tasksDone = this.tasksDone.map((task, index) => (
      <TasksDone
        key={Math.floor(Math.random() * 100000)}
        id={index}
        taskText={task.taskText}
        taskDate={task.taskDate}
        tasksDoneLength={this.tasksDone.length}
      />
    ));
    return (
      <>
        <AddTask
          textValue={inputTextValue}
          dateValue={inputDateValue}
          checkboxValue={checkboxValue}
          handleOnChange={this.handleOnChange}
          addTask={this.addTask}
        />
        <div className="tasksWrapper">
          <h2>Zadania do wykonania :</h2>
          {this.tasks.length === 0 ? null : tasks}
        </div>
        {this.tasksDone.length === 0 ? null : (
          <div className="tasksWrapper">
            <h3>Zadania wykonane {tasksDone.length}</h3>
            {tasksDone}
          </div>
        )}
      </>
    );
  }
}

export default ToDoApp;
