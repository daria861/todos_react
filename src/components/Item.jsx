import { useState } from "react"

export function Item({ title, id, status, tasks, setTasks }) {

    const [checked, setChecked] = useState(status)
    const classes = ['todo'];

    if (checked) {
        classes.push('status')
    }

    const updateStatus = () => {
        setChecked(!checked)

        setTasks([...tasks.map(item => {
            if (item.id === id) {
                item.status = !checked;
            }
            return item
        })])

    }

    const removeTask = () =>{
        setTasks([...tasks.filter(item => item.id !== id)])
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
        </li>
    )
}