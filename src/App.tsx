import React, {useEffect} from 'react';
import {Counter} from './pages/Counter/Counter';
import {Section} from "./components/Section/Section";
import {TaskList} from "./pages/TaskList/TaskList";
import {unstable_HistoryRouter as HistoryRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {TaskDetails} from "./pages/TaskDetails";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTasksLoading} from "./store/tasks/tasksSelector";
import {history} from "./history";
import {AppDispatch, loadTasks} from "./store/tasks/tasksThunks";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    const isTasksLoading = useSelector(selectIsTasksLoading);

    useEffect(() => {
        dispatch(loadTasks())
    }, []);

    return !isTasksLoading ? (
        <HistoryRouter history={history}>
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
        </HistoryRouter>
    ) : (
        <div>
            Loading
        </div>
    );
}

export default App;
