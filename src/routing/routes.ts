import {IndexPage} from "../components/IndexPage";
import {NotFoundPage} from "../components/NotFoundPage";
import {TaskWrapper} from "../components/TaskWrapper";

export enum AppRoutes {
    Index = '/',
    Tasks = '/tasks/*',
    TaskDetails = '/tasks/:id',
}

export const routes = [
    { path: AppRoutes.Index, Component: IndexPage },
    { path: AppRoutes.Tasks, Component: TaskWrapper },
    { path: '*', Component: NotFoundPage },
];