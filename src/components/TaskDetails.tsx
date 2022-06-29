import {ITask} from "../api/tasksApi";

interface ITaskDetailsProps {
    task: ITask;
}

export function TaskDetails({ task }: ITaskDetailsProps) {
    return (
        <div>
            <span>{task.name}</span>
            <span>{task.details}</span>
        </div>
    )
}