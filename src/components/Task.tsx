import {ITask} from "../api/tasksApi";
import {generatePath, Link} from "react-router-dom";
import {AppRoutes} from "../routing/routes";

interface ITaskProps {
    task: ITask;
}

export function Task({ task }: ITaskProps) {
    return (
        <li>
            <div>
                <Link to={generatePath(AppRoutes.TaskDetails, { id: task.id.toString() })}>
                    <span>{task.name}</span>
                </Link>
                <span>{task.details}</span>
            </div>
        </li>
    )
}