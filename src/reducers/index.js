import {combineReducers} from "redux"
import counter from "./counter"
import auth from "./auth"
import messages from "./messages"
import errors from "./errors"
import leads from "./leads"


const rootReducers = combineReducers({
    counter,
    auth,
    messages,
    errors,
    leads
})

export default rootReducers;