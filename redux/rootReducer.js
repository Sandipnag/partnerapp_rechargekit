import { combineReducers }  from 'redux';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    userStore:userReducer
});

export default rootReducer;
