/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { MOBILE_POSTPAID, MOBILE_PREPAID } from "./Type";

const initialState = {
    prepaid: false,
    postpaid: false,
}; 

const rechargeTypeReducer = (state=initialState,action)=>{

    switch (action.type){
        
            case MOBILE_PREPAID:

            return {
                ...state,
                prepaid: action.payload,
                postpaid: false,
            };
            case MOBILE_POSTPAID:

            return {
                ...state,
                postpaid: action.payload,
                prepaid: false,
            };
        default: return state;
    }

};

export default rechargeTypeReducer;