import {FC, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {AppRoutes } from "../routing/routes";

export function withAuthorized(Component: FC) {
    return () => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setLoading(false);
        })

        const isAuthorized = true;

        return loading ? null : isAuthorized ? (
            <Component/>
        ) : (
            <Navigate to={AppRoutes.Login}/>
        );
    }
}
