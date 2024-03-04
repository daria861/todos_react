import { Item } from "./Item"

export function List({tasks, setTasks, count, setCount}){

    return(
        <ul>
            {tasks.map(item => <Item key={item.id} {...item} tasks={tasks} setTasks = {setTasks} count={count} setCount={setCount} />)}
        </ul>
    )
}