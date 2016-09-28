import {handleActions} from 'redux-actions';
import {initState} from '../data/config';
import {CHANGE_NAVIGATION} from '../data/actionType';

const navReducer = handleActions({
    CHANGE_NAVIGATION: (state, {payload})=> {
        return state.set('index', payload.index);
    },
}, initState.get('nav'));

export default navReducer;