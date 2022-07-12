import React, {useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "../routing/routes";
import {Provider} from "react-redux";
import {configureStore} from "../store/configureStore";

export function App() {
    const store = useMemo(() => {
        return configureStore();
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {routes.map(({path, Component}) => (
                        <Route key={path} path={path} element={<Component/>}/>
                    ))}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}