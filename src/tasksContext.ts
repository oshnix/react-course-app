import {createContext} from "react";
import {ITask} from "./api/tasksApi";

export const TasksContext = createContext<Array<ITask>>([]);