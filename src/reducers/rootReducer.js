import { combineReducers } from 'redux-immutable';
import nav from './navReducer';

const rootReducer = combineReducers({
    nav
});

export default rootReducer;
