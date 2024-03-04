import { useEffect, useState } from "react"
import { List } from "./components/List"
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState(() => {

    const storedTodos = localStorage.getItem('tasks')
    return storedTodos ? JSON.parse(storedTodos) : []

  })

  const [title, setTitle] = useState('')
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count')
    return storedCount ? parseInt(storedCount, 10) : 0;
  })
  const [CurrentDateTime, setCurrentDateTime] = useState(new Date());


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  const addTask = (e) => {
    if (e.key === 'Enter' && title.trim() !== '') {
      setTasks([
        ...tasks, {
          id: uuidv4(),
          title: title,
          status: false,
          createdAt: new Date().toLocaleString()
        }
      ])
      setTitle('')
    }
  }



  return (
    <div className="container">
      <h1>Note your tasks</h1>
      <p>Finished tasks: {count}</p>
      <span>{CurrentDateTime.toLocaleString()}</span>

      <div className="input-field">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={addTask} />
        <label>Task name</label>
      </div>
      <List tasks={tasks} setTasks={setTasks} count={count} setCount={setCount} />
    </div>
  )
}

export default App
