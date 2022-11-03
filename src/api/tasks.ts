import {createContext, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {taskCreated} from "../store/tasks/tasksActions";
import {selectTasks} from "../store/tasks/tasksSelector";

const localStorageKey = 'tasks';
const defaultTasksList: Array<ITask> = [
    {name: 'Create component', id: 1, email: 'a@b.c'},
    {name: 'Add props', id: 2, email: 'a@b.c'},
    {name: 'Add event handler', id: 3, email: 'a@b.c'},
    {name: 'Profit', id: 4, email: 'a@b.c'},
];

export interface ITask {
    id: number;
    name: string;
    email: string;
}

export type TaskCreatePayload = Omit<ITask, 'id'>;

export async function getTasks(): Promise<Array<ITask>> {
    const content = localStorage.getItem(localStorageKey);
    if (!content) {
        return defaultTasksList;
    }

    return JSON.parse(content);
}

export function useTaskCreate() {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    }, [tasks]);

    return useCallback(async (taskToCreate: TaskCreatePayload) => {
        const maxId = Math.max(0, ...tasks.map(item => item.id)) + 1;

        const newTask = {
            ...taskToCreate,
            id: maxId,
        }

        dispatch(taskCreated(newTask));
    }, [dispatch, tasks]);
}
