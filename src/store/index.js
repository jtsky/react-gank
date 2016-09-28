import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk  from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from '../reducers/rootReducer';

const initialState = Immutable.Map();
/*export default createStore(
    rootReducer,
    initialState,
    // window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk, createLogger({stateTransformer: state => state.toJS()})),
);*/
//开启浏览器调试
export default createStore(
    rootReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension(),
    //applyMiddleware(thunk ,createLogger({ stateTransformer: state => state.toJS()})),
);
