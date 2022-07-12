import {TaskForm} from "./TaskForm";
import React from "react";
import { tasksApi } from "../api/tasksApi"
import {Task} from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {selectTasksArray} from "../store/tasksSelectors";
import {createAddTaskAction, createTaskAddedAction} from "../store/tasksActions";

export function TaskListPage() {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasksArray);

    const onTaskAdd = (taskName: string) => {
        dispatch(createAddTaskAction(taskName));
        tasksApi.saveTask({ name: taskName, details: '' }).then((createdTask) => {
            dispatch(createTaskAddedAction(createdTask));
        });
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