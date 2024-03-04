import { useEffect, useRef, useState } from "react"
import { List } from "./components/List"
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem('tasks')
    if(!storedTodos){
      return []
    }else{
      return JSON.parse(storedTodos)
    }
  })
  const [title, setTitle] = useState('')

  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  const addTask = (e) =>{
    if(e.key === 'Enter' && e.target.value !== ''){
      setTasks([
        ...tasks, {
          id: uuidv4(), 
          title: title,
          status: false
        }
      ])
      setTitle(' ')
    }
  }

  const date = new Date();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()


  return (
   <div className="container">
    <h1>Note your tasks</h1>
    <span>{month + ' ' + day + ', ' + year}</span>

    <div className="input-field">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={addTask}/>
      <label>Task name</label>
    </div>
    <List tasks = {tasks} setTasks ={setTasks}/>
   </div>
  )
}

export default App
