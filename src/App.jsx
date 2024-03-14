// App.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTaskStatus } from "../src/store/tasksSlice";
import { List } from "./components/List";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const count = useSelector(state => state.tasks.count);
  const currentDateTime = new Date(); // date and time

  useEffect(() => {}, []);

  const addNewTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title: title,
      createdAt: new Date().toLocaleString(), // Format date and time
    };
    dispatch(addTask(newTask));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      addNewTask(e.target.value.trim());
      e.target.value = ''; // Clear input
    }
  };

  return (
    <div className="container">
      <h1>Note your tasks</h1>
      <p>Finished tasks: {count}</p>
      <span>{currentDateTime.toLocaleString()}</span> {/* Display date and time */}

      <div className="input-field">
        <input type="text" onKeyDown={handleKeyDown} />
        <label>Task name</label>
      </div>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
