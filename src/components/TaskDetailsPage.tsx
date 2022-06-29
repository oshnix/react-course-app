import {useParams} from "react-router-dom";
import {Section} from "./Section";
import {TaskDetails} from "./TaskDetails";
import {useContext, useEffect, useState} from "react";
import {ITask, tasksApi} from "../api/tasksApi";
import {TasksContext} from "../tasksContext";

export function TaskDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const tasks = useContext(TasksContext);
    const [task, setTask] = useState<ITask | null>(null);

    useEffect(() => {
        const foundTask = tasks.find((t) => t.id.toString() === id);
        setTask(foundTask || null);
    }, [tasks, id]);

    return (
        <Section title="Task details">
            {task === null ? (
                <span>task not found</span>
            ) : (
                <TaskDetails task={task}/>
            )}
        </Section>
    );
}