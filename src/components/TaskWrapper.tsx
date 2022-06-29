import { TasksContext } from "../tasksContext";
import {Route, Routes} from "react-router-dom";
import {TaskListPage} from "./TaskListPage";
import {TaskDetailsPage} from "./TaskDetailsPage";
import {useEffect, useState} from "react";
import {ITask, tasksApi} from "../api/tasksApi";

export function TaskWrapper() {
    const [tasks, setTasks] = useState<Array<ITask>>([]);

    useEffect(() => {
        tasksApi.getTasks().then(result => {
            setTasks(result);
        });
    }, []);

    return (
        <TasksContext.Provider value={tasks}>
            <Routes>
                <Route index element={<TaskListPage/>} />
                <Route path="/:id" element={<TaskDetailsPage/>} />
            </Routes>
        </TasksContext.Provider>
    );
}