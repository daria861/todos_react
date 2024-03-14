// List.js
import React from "react";
import { useSelector } from "react-redux";
import { Item } from "./Item";

export function List() {
  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <ul>
      {tasks.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
