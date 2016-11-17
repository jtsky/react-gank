import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Titlebar = (props)=>(
    <AppBar title={props.title} showMenuIconButton={false}
            iconElementRight={<FlatButton label="Vue2.0版" onClick={()=>{window.open("/vue-gank.html","vue-gank");}}/>}/>
);

Titlebar.propTypes = {
    title: React.PropTypes.string,
};

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
Titlebar.defaultProps = {
    title: '干货集中营',
}

export default Titlebar;