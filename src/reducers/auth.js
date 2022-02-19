import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
} from "../actions/types"

const initialState = {
    token:localStorage.getItem("token"),
    user:null,
    isLoading:false,
    isAuthenticated:false
}


const authReducer = (state=initialState,action) => {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true,
            }
        case USER_LOADED:
            return{
                ...state,
                user:action.payload,
                isAuthenticated:true,
                isLoading:false,
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            const {token,...rest} = action.payload;
            localStorage.setItem('token', token);
            return {...state,user:{...rest},isAuthenticated:true,isLoading:false}
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
            localStorage.removeItem("token")
            return {
                ...state,
                user:null,
                token:null,
                isAuthenticated:false,
                isLoading:false
            }
        default:
            return state
    }
}


export default authReducer;
