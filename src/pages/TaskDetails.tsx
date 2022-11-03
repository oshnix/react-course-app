import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTasks} from "../store/tasks/tasksSelector";

export function TaskDetails() {
    const tasks = useSelector(selectTasks);
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
