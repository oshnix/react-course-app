import React from "react";
import {Link} from "react-router-dom";
import {TaskCreate} from "./TastCreate/TaskCreate";
import {useSelector} from "react-redux";
import {selectTasks} from "../../store/tasks/tasksSelector";

export function TaskList () {
    const tasks = useSelector(selectTasks);

    return (
        <>
            <TaskCreate />
            <ul>
                {tasks.map(item => (
                    <li key={item.name}>
                        <Link to={`/tasks/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
