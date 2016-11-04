import {createAction} from 'redux-actions';
import {CHANGE_NAVIGATION, LOAD_DATA, SHOW_PROGRESS, SHOW_MODAL} from '../data/actionType';
//创建指定类型的action
const changeNav = createAction(CHANGE_NAVIGATION);
const showProgress = createAction(SHOW_PROGRESS);
const showModal = createAction(SHOW_MODAL);
const loadData = createAction(LOAD_DATA);

export {changeNav,  showProgress,showModal,loadData};