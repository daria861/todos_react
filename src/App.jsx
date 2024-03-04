import { useEffect, useState } from "react"
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
  const [count, setCount] = useState(0)

  const [date, setDate] = useState(new Date());


  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('count', count);
    localStorage.setItem('date', date.toString());
  }, [tasks, count, date])
  

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



  return (
   <div className="container">
    <h1>Note your tasks</h1>
    <p>Finished tasks: {count}</p>
    <span>{month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes}</span>

    <div className="input-field">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={addTask}/>
      <label>Task name</label>
    </div>
    <List tasks = {tasks} setTasks ={setTasks} count={count} setCount={setCount} month ={month} day={day} year={year} hours ={hours} minutes={minutes}/>
   </div>
  )
}

export default App
