import { combineReducers } from 'redux';
import BloodBankReducer from './BloodBankReducer';
import UserReducer from './BloodBankReducer';

const rootReducer = combineReducers({
    BloodBankReducer, UserReducer
});

export default rootReducer;