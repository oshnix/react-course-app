import {Route, Routes} from "react-router-dom";
import {TaskListPage} from "./TaskListPage";
import {TaskDetailsPage} from "./TaskDetailsPage";
import {useEffect} from "react";
import {tasksApi} from "../api/tasksApi";
import {useDispatch} from "react-redux";
import {createTasksLoadedAction} from "../store/tasksActions";

export function TaskWrapper() {
    const dispatch = useDispatch();

    useEffect(() => {
        tasksApi.getTasks().then(result => {
            dispatch(createTasksLoadedAction(result));
        });
    }, []);

    return (
        <Routes>
            <Route index element={<TaskListPage/>}/>
            <Route path="/:id" element={<TaskDetailsPage/>}/>
        </Routes>
    );
}