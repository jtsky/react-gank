import {handleActions} from 'redux-actions';
import {initState} from '../data/config';
import {SHOW_MODAL} from '../data/actionType';

const modalReducer = handleActions({

    SHOW_MODAL: (state, {payload})=> {
        return state.set('modalSrc', payload.modalSrc);
    },

}, initState.get('modal'));

export default modalReducer;