import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import loginReducer from './user/loginReducerData';

const rootReducer = combineReducers({
  userStore: userReducer,
  loginState: loginReducer,
});

export default rootReducer;
