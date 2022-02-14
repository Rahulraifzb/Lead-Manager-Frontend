import React from "react";
import { Redirect, Route,useLocation } from "react-router-dom";

const ProtectedRoute = (props) => {
    const user = true;
    const location = useLocation()
    const {path} = props;

    if(path === "/login" || path === "/register"){
        return user ? (
            <Redirect to={location.state?.from ?? "/"} />
        ):(
            <Route {...props} />
        )
    }

    return user ? (
        <Route {...props} />
    ):(
        <Redirect
            to={{
                pathname:"/login",
                state:{from:path}
            }}
        />
    )
}

export default ProtectedRoute;