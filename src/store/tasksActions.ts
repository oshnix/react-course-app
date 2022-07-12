import {ITask} from "../api/tasksApi";

export function createAction<ActionType extends string>(actionType: ActionType) {
    return function<PayloadType>(){
        return (payload: PayloadType) => ({
            type: actionType,
            payload,
        });
    }
}


export const createLoadTaskAction = createAction('LOAD_TASKS')<void>();
export const createTasksLoadedAction = createAction('TASKS_LOADED')<Array<ITask>>();
export const createAddTaskAction = createAction('ADD_TASK')<string>();
export const createTaskAddedAction = createAction('TASK_ADDED')<ITask>();

export type TasksActions = (
    ReturnType<typeof createTasksLoadedAction>
    | ReturnType<typeof createAddTaskAction>
    | ReturnType<typeof createTaskAddedAction>
    | ReturnType<typeof createLoadTaskAction>
);