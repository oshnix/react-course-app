import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "../routing/routes";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}
            </Routes>
        </BrowserRouter>
    );
}