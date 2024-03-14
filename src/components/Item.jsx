// Item.js
import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTaskStatus } from "../store/tasksSlice";

export function Item({ id, title, status, createdAt }) {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus({ id }));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <li className={status ? 'todo status' : 'todo'} key={id}>
      <label>
        <input type="checkbox"
          checked={status}
          onChange={handleToggleStatus}
        />
        <span>{title}</span>
        <i className="material-icons red-text" onClick={handleRemoveTask}>x</i>
      </label>
      <span className="date">{createdAt}</span>
    </li>
  );
}
