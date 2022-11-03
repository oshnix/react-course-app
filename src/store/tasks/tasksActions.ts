import {createAction} from "@reduxjs/toolkit";
import {ITask} from "../../api/tasks";

export const tasksLoaded = createAction<Array<ITask>>('TASKS/TASKS_LOADED');
export const taskCreated = createAction<ITask>('TASKS/TASK_CREATED');
