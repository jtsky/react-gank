import {createAction} from 'redux-actions';
import {CHANGE_NAVIGATION} from '../data/actionType';
//创建指定类型的action
const changeNav = createAction(CHANGE_NAVIGATION);

export {changeNav};