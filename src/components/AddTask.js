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
      <label>
        <input
          className="textInput"
          name="inputTextValue"
          onChange={handleOnChange}
          type="text"
          placeholder="Dodaj zadanie"
          value={textValue}
        />
      </label>
      <input
        className="inputCheckbox"
        type="checkbox"
        name="checkboxValue"
        onChange={handleOnChange}
        checked={checkboxValue}
        value={checkboxValue}
      />
      Priorytet
      <label>
        Do kiedy zrobić:
        <input
          className="dateInput"
          onChange={handleOnChange}
          name="inputDateValue"
          type="date"
          value={dateValue}
        />
      </label>
      <button className="addTaskBtn" onClick={addTask}>
        Dodaj zadanie
      </button>
    </div>
  );
};

export default AddTask;
