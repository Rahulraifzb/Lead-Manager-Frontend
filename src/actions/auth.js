import axios from "axios"
import { createErrors } from "./errors"
import { createMessages, returnErrors } from "./messages"

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from "./types"

const url = "http://127.0.0.1:9000"

export const loadUser = () => (dispatch,getState) => {
    dispatch({type:USER_LOADING})

    axios.get(`${url}/api/users/user-details/`,tokenConfig(getState))
    .then((response) => {
        dispatch({
            type:USER_LOADED,
            payload:response.data,
        })
    })
    .catch((error) => {
        // console.log(" ------ Error response data ------ ",error.response.data)
        dispatch(createErrors(error?.response?.data,error?.response?.status))
        dispatch({
            type:AUTH_ERROR
        })
    })
}


export const login = ({username,password}) => (dispatch)  => {
    dispatch({type:USER_LOADING})
    

    const config = {
        headers:{
            "Content-Type":"application/json",
        },
    };

    const body = JSON.stringify({username,password})

    axios.post(`${url}/api/users/login/`,body,config)
    .then((res) => {
        console.log(" ----- Response Data ----- ",res.data)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    })
    .catch((error) => {
        dispatch(createErrors(error.response.data,error.response.status))
        dispatch({
            type:LOGIN_FAIL
        })
    })
}


export const register = (data) => (dispatch) => {

    dispatch({type:USER_LOADING})
    
    const config = {
        headers : {
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify({...data})

    axios.post(`${url}/api/users/register/`,body,config)

    .then((response) => {
        dispatch({
            type:REGISTER_SUCCESS,
            payload:response.data
        })
    })
    .catch((error) => {
        dispatch(createErrors(error.response.data,error.response.status))
        dispatch({
            type:REGISTER_FAIL
        })
    })
}

export const logout = () => (dispatch,getState) => {
    console.log(" ---- Token config ---- ",tokenConfig(getState))
    axios.post(`${url}/api/users/logout/`,null,tokenConfig(getState))
    .then((response) => {
        dispatch({
            type:LOGOUT_SUCCESS,
        })
    })
    .catch((error) => {
        dispatch(createErrors(error.response.data,error.response.status))
    })
}

export const tokenConfig = (getState) => {
    const token = getState().auth.token || localStorage.getItem("token");

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    if(token){
        config.headers["Authorization"] = `token ${token}`;
    }

    return config;
}