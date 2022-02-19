import {CREATE_ERROR} from "../actions/types"


const initialState = {
    msg:{},
    status:null
}

const errors = (state=initialState,action) => {
    switch(action.type){
        case CREATE_ERROR:
            return (state = action.payload)
        default:
            return state 
    }
}

export default errors;