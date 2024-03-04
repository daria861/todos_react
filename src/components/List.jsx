import { Item } from "./Item"

export function List({tasks, setTasks,count, setCount, year, month, day, hours, minutes}){

    return(
        <ul>
            {tasks.map(item => <Item key={item.id} {...item} tasks={tasks} setTasks = {setTasks} count={count} setCount={setCount} day={day} month={month} year={year} hours={hours} minutes={minutes}/>)}
        </ul>
    )
}