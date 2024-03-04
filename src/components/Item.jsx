import { useState } from "react"

export function Item({ title, id, status, tasks, setTasks, count, setCount, day, month, year, hours, minutes}) {

    const [checked, setChecked] = useState(status)
    const classes = ['todo'];
    if (checked) {
        classes.push('status')
    }

  

    // const updateStatus = () => {
    //     setChecked(!checked)
    
    //     setTasks([...tasks.map(item => {
    //         if (item.id === id) {
    //             item.status = !checked;
    //         }
    //         return item
    //     })])
    // }
    

    const updateStatus = () => {
        setChecked(!checked);
        const newTasks =[...tasks.map(item => {
            if (item.id === id) {
                item.status = !checked;
            }
            return item;
        })];
        setTasks(newTasks);
        // Count checked 
        const checkedCount = newTasks.filter(item => item.status).length;
        setCount(checkedCount);
    }

    const removeTask = () =>{
        setTasks([...tasks.filter(item => item.id !== id)])
        // count if the removed task
        if (checked) {
            setCount(count - 1);
        }
    }

    

    return (
        <li className={classes.join(' ')} key={id}>
            <label>
                <input type="checkbox"
                    checked={checked}
                    onChange={updateStatus}
                />
                <span>{title}</span>
                <i className="material-icons red-text" onClick={removeTask}>x</i>
            </label>
            <span className="date">{month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes}</span>
        </li>
    )
}