import {handleActions} from 'redux-actions';
import {initState} from '../data/config';
import {CHANGE_NAVIGATION, SHOW_PROGRESS} from '../data/actionType';

const navReducer = handleActions({
    CHANGE_NAVIGATION: (state, {payload})=> {
        return state.set('index', payload.index);
    },
    SHOW_PROGRESS: (state, {payload})=> {
        return state.set('showProgress', payload.showProgress);
    },

}, initState.get('nav'));

export default navReducer;