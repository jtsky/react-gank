import {combineReducers} from 'redux-immutable';
import nav from './navReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
    nav, modal
});

export default rootReducer;
