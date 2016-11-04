import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './containers/MainContainer';
import store from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//支持移动端触摸事件
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={MainContainer}>
                    {/*<IndexRoute component={HomePageContainer} />*/}
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app')
);