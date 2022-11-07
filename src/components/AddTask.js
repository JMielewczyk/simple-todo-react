import React from "react";

const AddTask = ({
  textValue,
  dateValue,
  checkboxValue,
  handleOnChange,
  addTask,
}) => {
  return (
    <div className="inputsWrapper">
      <h1>ToDo</h1>
      <div>
        <input
          className="textInput"
          name="inputTextValue"
          onChange={handleOnChange}
          type="text"
          placeholder="Dodaj zadanie"
          value={textValue}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          name="checkboxValue"
          onChange={handleOnChange}
          checked={checkboxValue}
          value={checkboxValue}
        />
        Priorytet
      </div>
      <div>
        Do kiedy zrobić:
        <input
          className="dateInput"
          onChange={handleOnChange}
          name="inputDateValue"
          type="date"
          value={dateValue}
        />
      </div>
      <button className="addTaskBtn" onClick={addTask}>
        Dodaj zadanie
      </button>
    </div>
  );
};

export default AddTask;
