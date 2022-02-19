import React from "react";
import { Redirect, Route,useLocation } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) => {
    const {isAuthenticated,...rest} = props.auth;
    const location = useLocation()
    const {path} = props;

    if(path === "/login" || path === "/register"){
        return isAuthenticated ? (
            <Redirect to={location.state?.from ?? "/"} />
        ):(
            <Route {...props} />
        )
    }

    return isAuthenticated ? (
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

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(ProtectedRoute);