import React, {useEffect} from 'react';
import {Counter} from './pages/Counter/Counter';
import {Section} from "./components/Section/Section";
import {TaskList} from "./pages/TaskList/TaskList";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {TaskDetails} from "./pages/TaskDetails";
import {getTasks} from './api/tasks';
import {useDispatch, useSelector} from "react-redux";
import {tasksLoaded} from "./store/tasks/tasksActions";
import {selectIsTasksLoading} from "./store/tasks/tasksSelector";

function App() {
    const dispatch = useDispatch();
    const isTasksLoading = useSelector(selectIsTasksLoading);

    useEffect(() => {
        getTasks().then((tasksList) => {
            dispatch(tasksLoaded(tasksList));
        });
    }, []);

    return !isTasksLoading ? (
        <BrowserRouter>
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
                    <Route path="/" element={<Navigate to="/counters"/>}/>
                    <Route element={<Section/>}>
                        <Route path="/counters" element={<Counter/>}/>
                    </Route>
                    <Route element={<Section/>}>
                        <Route path="/tasks" element={<TaskList/>}/>
                    </Route>
                    <Route element={<Section/>}>
                        <Route path="/tasks/:id" element={<TaskDetails/>}/>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    ) : (
        <div>
            Loading
        </div>
    );
}

export default App;
