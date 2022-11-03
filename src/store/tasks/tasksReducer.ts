import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {ITask} from "../../api/tasks";
import {taskCreated, tasksLoaded} from "./tasksActions";

const tasksList = createReducer<Array<ITask> | null>(null, (builder) => {
    builder.addCase(tasksLoaded, (state, action) => action.payload);
    builder.addCase(taskCreated, (state, action) => [...(state || []), action.payload]);
});

const isTasksLoading = createReducer(true, (builder) => {
    builder.addCase(tasksLoaded, () => false);
});

export const tasksReducer = combineReducers({
    tasksList,
    isTasksLoading,
})
