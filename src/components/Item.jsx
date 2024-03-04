import { useState } from "react"

export function Item({ title, id, status, tasks, setTasks, count, setCount, createdAt}) {

    const classes = ['todo']

    if(status){
        classes.push('status')
    }



    const updateStatus = () => {
        
        setTasks([...tasks.map(item => {
            if (item.id === id) {
                item.status = !status;
            }
            return item;
        })]);

        // Count checked 
        const checkedCount = tasks.filter(item => item.status).length;
        setCount(checkedCount);
    }

    const removeTask = () =>{
        setTasks([...tasks.filter(item => item.id !== id)])
        // count if the removed task
        if (status) {
            setCount(count - 1);
        }
    }

    

    return (
        <li className={classes.join(' ')} key={id}>
            <label>
                <input type="checkbox"
                    checked={status}
                    onChange={updateStatus}
                />
                <span>{title}</span>
                <i className="material-icons red-text" onClick={removeTask}>x</i>
            </label>
            <span className="date">{createdAt.toLocaleString()}</span>
        </li>
    )
}