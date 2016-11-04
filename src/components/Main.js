import React, {Component} from 'react';
import Titlebar from './main/Titlebar';
import NavigantionContainer from '../containers/NavigantionContainer';
import FlyModal from 'boron/FlyModal';
import {titles} from '../data/config';
import {showModal} from  '../action/customAction';
import store from '../store';
class Main extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    //组件加载完成
    componentDidMount() {

    }

    render() {
        let {modalSrc} = this.props;
        return (
            <div>
                <FlyModal ref='modal' className='modal'>
                    <img src={modalSrc} className='img' onClick={this.hideModal}/>
                </FlyModal>
                <Titlebar title="干货集中营"/>
                <NavigantionContainer titles={titles} showModal={this.showModal}/>
            </div>
        );
    }

    showModal(url) {
        store.dispatch(showModal({modalSrc: url}));
        this.refs.modal.show();
    }

    hideModal() {
        this.refs.modal.hide();
    }
}

Main.propTypes = {
    modalSrc: React.PropTypes.string,
};

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
Main.defaultProps = {}

export default  Main;
