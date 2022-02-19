import { DELETE_LEAD, ADD_LEAD, GET_LEADS,UPDATE_LEAD,LEAD_LOADING } from "../actions/types";
import {tokenConfig} from "../actions/auth"
import axios from "axios"
import { createMessages } from "./messages";

const url = 'http://127.0.0.1:9000'

export const getLeads = () => (dispatch,getState) => {
    dispatch({type:LEAD_LOADING})
    axios.get(`${url}/api/leads/`,tokenConfig(getState))
    .then((res) => {
        dispatch({
            type:GET_LEADS,
            payload:res.data
        })
    })
    .catch((error) => console.log(error.response.data))
}

export const createLead = (data,callback) => (dispatch,getState) => {
    dispatch({type:LEAD_LOADING})
    axios.post(`${url}/api/leads/`,data,tokenConfig(getState))
    .then((res) => {
        dispatch({
            type:ADD_LEAD,
            payload:res.data
        })
        callback()
        dispatch(createMessages({addLead:"Lead Added!"}))
    })
    .catch((error) => console.log(error))
}

export const deleteLead = (id) => (dispatch,getState) => {
    dispatch({type:LEAD_LOADING})
    axios.delete(`${url}/api/leads/${id}`,tokenConfig(getState))
    .then((response) => {
        dispatch({
            type:DELETE_LEAD,
            payload:id
        })
        dispatch(createMessages({deleteLead:"Lead Deleted!"}))
    })
    .catch((error) => console.log(error))
}

export const updateLead = (id,data,callback) => (dispatch,getState) => {
    dispatch({type:LEAD_LOADING}) 
    console.log(" update data ",data)
    axios.put(`${url}/api/leads/${id}/`,data,tokenConfig(getState))
    .then((res) => {
        dispatch({
            type:UPDATE_LEAD,
            payload:res.data
        })
        callback()
        dispatch(createMessages({updateLead:"Lead Updated!"}))
    })
    .catch((error) => console.log(error))
} 