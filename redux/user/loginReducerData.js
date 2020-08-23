/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { LOGIN_SUCCESS_DATA, TOKEN } from "./userTypes";

const initialState = {
    token: '',
    login_success_data: {},
}; 

const loginReducer = (state=initialState,action)=>{

    switch (action.type){
        
            case LOGIN_SUCCESS_DATA:

            return {
                ...state,
                login_success_data: action.payload,
            };
            case TOKEN:

            return {
                ...state,
                token: action.payload,
            };
        default: return state;
    }

};

export default loginReducer;
