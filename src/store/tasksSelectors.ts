import {StoreState} from "./configureStore";

export const selectTasksArray = (state: StoreState) => state.tasks.tasks;