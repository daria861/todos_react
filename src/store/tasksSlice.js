// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: loadTasksFromLocalStorage(), // Load tasks from localStorage
    count: 0,
  },
  reducers: {
    addTask: (state, action) => {
      const { id, title, createdAt } = action.payload;
      state.tasks.push({ id, title, createdAt, status: false });
      state.count++;
      saveTasksToLocalStorage(state.tasks); // Save tasks to localStorage
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== id);
      state.count = state.tasks.filter(task => task.status).length;
      saveTasksToLocalStorage(state.tasks); // Save tasks to localStorage
    },
    toggleTaskStatus: (state, action) => {
      const { id } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = !task.status;
        state.count = state.tasks.filter(task => task.status).length;
        saveTasksToLocalStorage(state.tasks); // Save tasks to localStorage
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
