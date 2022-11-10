import {combineReducers, createReducer, isAnyOf} from "@reduxjs/toolkit";
import {ITask} from "../../api/tasks";
import {loadTasksActions, taskCreated} from "./tasksActions";

const tasksList = createReducer<Array<ITask> | null>(null, (builder) => {
    builder.addCase(loadTasksActions.success, (state, action) => action.payload);
    builder.addCase(taskCreated, (state, action) => [...(state || []), action.payload]);
});

const isTasksLoading = createReducer(false, (builder) => {
    builder.addCase(loadTasksActions.init, () => true);
    builder.addMatcher(isAnyOf(loadTasksActions.success, loadTasksActions.error), () => false);
});

export const tasksReducer = combineReducers({
    tasksList,
    isTasksLoading,
})
