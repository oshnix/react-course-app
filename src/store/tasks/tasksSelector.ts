import {StoreState} from "../rootReducer";

export const selectTasks = (state: StoreState) => state.tasks.tasksList || [];
export const selectIsTasksLoading = (state: StoreState) => state.tasks.isTasksLoading;
