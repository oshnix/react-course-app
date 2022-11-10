import {getTasks, TaskCreatePayload} from "../../api/tasks";
import {Action, AnyAction, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit'
import {StoreState} from "../rootReducer";
import {createApiActions, loadTasksActions, taskCreated } from "./tasksActions";
import {selectTasks} from "./tasksSelector";
import {history} from "../../history";

export type AppDispatch = ThunkDispatch<StoreState, unknown, Action>;
export type AppThunkAction<ReturnType = unknown> = ThunkAction<ReturnType, StoreState, unknown, AnyAction>;

function apiThunk<DataType>(actions: ReturnType<typeof createApiActions>, apiCall: () => Promise<DataType>): AppThunkAction {
    return async (dispatch) => {
        await dispatch(actions.init());
        try {
            const data = await apiCall();
            dispatch(actions.success(data));
        } catch (e) {
            dispatch(actions.error(e));
        }
    }
}

export const loadTasks = apiThunk(loadTasksActions, getTasks);

export function createTask(taskToCreate: TaskCreatePayload): AppThunkAction {
    return async (dispatch, getState) => {
        const tasks = selectTasks(getState());
        const maxId = Math.max(0, ...tasks.map(item => item.id)) + 1;

        const newTask = {
            ...taskToCreate,
            id: maxId,
        }

        await dispatch(taskCreated(newTask));

        const updatedTasks = selectTasks(getState());
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        history.push('/');
    }
}
