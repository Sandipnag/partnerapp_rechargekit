/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { CHANGE_LOGGED_IN_STATUS } from "./userTypes";

const initialState = {
    loggedInStatus:false,
}; 

const userReducer = (state=initialState,action)=>{

    switch (action.type){
        case CHANGE_LOGGED_IN_STATUS:

            return {
                ...state,
                loggedInStatus: !state.loggedInStatus,
            };
        default: return state;
    }

};

export default userReducer;
