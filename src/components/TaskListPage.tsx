import {TaskForm} from "./TaskForm";
import React, { useContext } from "react";
import { tasksApi } from "../api/tasksApi"
import {Task} from "./Task";
import {TasksContext} from "../tasksContext";

export function TaskListPage() {
    const tasks = useContext(TasksContext);

    const onTaskAdd = (taskName: string) => {
        tasksApi.saveTask({ name: taskName, details: '' });
    }

    return (
        <React.Fragment>
            <TaskForm onTaskAdd={onTaskAdd}/>
            {(tasks !== null && tasks.length > 0) ? (
                <ul>
                    {tasks.map(task => (
                        <Task key={task.id} task={task}/>
                    ))}
                </ul>
            ) : (
                <span>List is empty</span>
            )}
        </React.Fragment>
    );
}