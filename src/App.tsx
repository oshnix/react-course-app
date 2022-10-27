import React, {useEffect, useState} from 'react';
import {Counter} from './pages/Counter/Counter';
import {Section} from "./components/Section/Section";
import {TaskList} from "./pages/TaskList/TaskList";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {TaskDetails} from "./pages/TaskDetails";
import {getTasks, ITask, TasksListContext} from './api/tasks';

function App() {
    const [tasks, setTasks] = useState<Array<ITask> | null>(null);

    useEffect(() => {
        getTasks().then(setTasks);
    }, []);

    return tasks ? (
        <BrowserRouter>
            <TasksListContext.Provider value={tasks}>
            <header>
                <Link to="/counter">
                    Counter
                </Link>
                <Link to="/tasks">
                    Tasks
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/counters" />} />
                    <Route element={<Section />}>
                        <Route path="/counters" element={<Counter />} />
                    </Route>
                    <Route element={<Section />}>
                        <Route path="/tasks" element={<TaskList/>} />
                    </Route>
                    <Route element={<Section />}>
                        <Route path="/tasks/:id" element={<TaskDetails/>} />
                    </Route>
                </Routes>
            </main>
            </TasksListContext.Provider>
        </BrowserRouter>
    ) : (
        <div>
            Loading
        </div>
    );
}

export default App;
