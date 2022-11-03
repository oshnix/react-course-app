import {combineReducers} from "@reduxjs/toolkit";
import {tasksReducer} from "./tasks/tasksReducer";

export const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
