import {createAction} from "@reduxjs/toolkit";
import {ITask} from "../../api/tasks";

export const loadTasksRequest = createAction<void>('TASKS/LOAD_TASKS_REQUEST');
export const loadTasksSuccess = createAction<Array<ITask>>('TASKS/LOAD_TASKS_SUCCESS');
export const loadTasksError = createAction<Error>('TASKS/LOAD_TASKS_ERROR');


export function createApiActions<InitPayload, SuccessPayload, ErrorPayload = Error>(type: string, ) {
    return {
        init: createAction<InitPayload>(`${type}_REQUEST`),
        success: createAction<SuccessPayload>(`${type}_SUCCESS`),
        error: createAction<Error>(`${type}_ERROR`),
    }
}

export const loadTasksActions = createApiActions<void, Array<ITask>>('TASKS/LOAD_TASKS');




export const tasksLoaded = createAction<Array<ITask>>('TASKS/TASKS_LOADED');

export const tasksLoading = createAction<void>('TASKS/TASKS_LOADING');
export const taskCreated = createAction<ITask>('TASKS/TASK_CREATED');
