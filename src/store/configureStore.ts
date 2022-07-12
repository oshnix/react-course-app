import {combineReducers, compose, createStore} from "redux";
import {tasksReducer} from "./tasksReducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
    return createStore(
        rootReducer,
        // @ts-ignore
        composeEnhancers(),
    );
}