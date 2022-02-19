import { DELETE_LEAD, ADD_LEAD, GET_LEADS,SELECT_LEAD,UPDATE_LEAD,LEAD_LOADING } from "../actions/types";

const initialState = {
  leads: [],
  selectedLead:{},
  isLoading:false
};

const leads = (state=initialState, action) => {
  switch (action.type) {
    case LEAD_LOADING:
      return {
        ...state,
        isLoading:true,
      }
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
        isLoading:false,
      };
    case SELECT_LEAD:
        return {
          ...state,
          selectedLead:state.leads.find((lead) => lead.id === action.payload),
          isLoading:false,
        }
    case ADD_LEAD:
      console.log(" state leads ",state.leads,action.payload)
      return { ...state,leads:[...state.leads,action.payload],isLoading:false, };
    case UPDATE_LEAD:
        console.log(" ----- Lead updated ----- ")
        const data = state.leads.findIndex((lead) => lead.id === action.payload.id)
        const copyLeadsData = [...state.leads]
        copyLeadsData[data] = action.payload
        return {...state,selectedLead:{},leads:copyLeadsData,isLoading:false,};
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
        isLoading:false,
      };
    default:
      return state;
  }
};


export default leads;