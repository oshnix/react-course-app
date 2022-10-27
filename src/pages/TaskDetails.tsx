import {useParams} from "react-router-dom";
import {useContext} from "react";
import {TasksListContext} from "../api/tasks";

export function TaskDetails() {
    const tasks = useContext(TasksListContext);
    const { id } = useParams<{ id: string }>();
    const numberId = parseInt(id || '');
    const task = tasks.find(task => task.id === numberId);

    return !!task ? (
        <div>
            <span>{task.id}</span>
            <span>{task.name}</span>
        </div>
    ) : (
        <div>
            Incorrect id provided
        </div>
    )
}
