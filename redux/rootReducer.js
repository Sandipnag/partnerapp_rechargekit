import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import loginReducer from './user/loginReducerData';
import rechargeTypeReducer from './RechargeType/rechargeTypeReducer';

const rootReducer = combineReducers({
  userStore: userReducer,
  loginState: loginReducer,
  rechargeTypeReducer: rechargeTypeReducer,
});

export default rootReducer;
