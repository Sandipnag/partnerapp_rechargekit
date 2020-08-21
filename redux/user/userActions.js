import { CHANGE_LOGGED_IN_STATUS } from './userTypes';

export const changeLoggedInStatus = (status) =>{
    return{
        type : CHANGE_LOGGED_IN_STATUS,
        payLoad:status
    }
}