import {createContext} from "react";

const localStorageKey = 'tasks';
const defaultTasksList: Array<ITask> = [
    { name: 'Create component', id: 1, },
    { name: 'Add props', id: 2, },
    { name: 'Add event handler', id: 3, },
    { name: 'Profit', id: 4 },
];

export interface ITask {
    id: number;
    name: string;
}



export const TasksListContext = createContext<Array<ITask>>([]);

export async function getTasks(): Promise<Array<ITask>> {
    const content = localStorage.getItem(localStorageKey);
    if (!content) {
        return defaultTasksList;
    }

    return JSON.parse(content);
}

export async function saveTasks(newTask: Omit<ITask, 'id'>): Promise<Array<ITask>> {
    const existingTasks = await getTasks();
    const maxId = Math.max(0, ...existingTasks.map(item => item.id));

    const updatedTasks = existingTasks.concat({
        ...newTask,
        id: maxId,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(updatedTasks));

    return updatedTasks;
}
