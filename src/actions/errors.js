import { CREATE_ERROR } from "./types";

// RETURN ERRORS
export const createErrors = (msg, status) => {
  return {
    type: CREATE_ERROR,
    payload: { msg, status },
  };
};
