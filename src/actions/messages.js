import { CREATE_MESSAGE } from "./types";


// RETURN ERRORS
export const createMessages = (msg,status) => {
    return {
        type:CREATE_MESSAGE,
        payload:{msg,status}
    }
}