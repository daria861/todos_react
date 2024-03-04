import { Item } from "./Item"

export function List({tasks, setTasks}){

    return(
        <ul>
            {tasks.map(item => <Item key={item.id} {...item} tasks={tasks} setTasks = {setTasks}/>)}
        </ul>
    )
}