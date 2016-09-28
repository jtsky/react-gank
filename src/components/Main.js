import React, {Component} from 'react';
import Titlebar from './main/Titlebar';
import NavigantionContainer from '../containers/NavigantionContainer';
import {titles} from '../data/config'



class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Titlebar title="干货集中营"/>
                <NavigantionContainer titles={titles}/>
            </div>
        );
    }
}

export default  Main;
