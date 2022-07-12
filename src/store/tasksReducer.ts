import {ITask} from "../api/tasksApi";
import {Action, combineReducers} from "redux";
import { TasksActions } from "./tasksActions";

export function isTasksLoading(state: boolean = false, action: Action) {
    switch (action.type) {
        case 'LOAD_TASKS':
        case 'ADD_TASK':
            return true;
        case 'TASKS_LOADED':
        case 'TASK_ADDED':
            return false;
        default:
            return state;
    }
}

export function tasks(state: Array<ITask> = [], action: TasksActions): Array<ITask> {
    switch (action.type) {
        case 'TASKS_LOADED':
            return action.payload;
        case 'TASK_ADDED':
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
}

export const tasksReducer = combineReducers({
    isTasksLoading,
    tasks,
});