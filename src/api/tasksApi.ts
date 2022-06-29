const localStorageKey = 'tasks';

export interface ITask {
    id: number;
    name: string;
    details: string;
}

function getFromLocalStorage<ReturnType = unknown>(key: string): ReturnType | null {
    const content = localStorage.getItem(key);
    try {
        const parsedContent: ReturnType = JSON.parse(content || "");
        return parsedContent;
    } catch (e) {
        return null;
    }
}

function saveToLocalStorage(key: string, content: unknown): void {
    localStorage.setItem(key, JSON.stringify(content));
}

export const tasksApi = {
    async getTasks() {
        return getFromLocalStorage<Array<ITask>>(localStorageKey) || [];
    },
    async saveTask(task: Omit<ITask, 'id'>) {
        const existingTasks = await tasksApi.getTasks();
        const lastElement = existingTasks[existingTasks.length - 1];
        const newId = lastElement ? lastElement.id + 1 : 0;
        saveToLocalStorage(localStorageKey, [...existingTasks, { ...task, id: newId }]);
    }
}