import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


const styles = {
    tab: {
        fontSize: 14,
    },
    slide: {
        padding: 15,
        minHeight: 100,
    },
};

const Navigation = ({titles, index, onHandleChange})=> {
    let titleRows = [];
    let pagerRows = [];
    titles.forEach((title, index)=> {
        titleRows.push(<Tab style={styles.tab} label={title} value={index} key={index}/>);
        pagerRows.push(<div style={styles.slide} key={index}>{title}</div>)
    });
    return (
        <div>
            <Tabs
                onChange={onHandleChange}
                value={index}>
                {titleRows}
            </Tabs>
            <SwipeableViews
                index={index}
                onChangeIndex={onHandleChange}>
                {pagerRows}
            </SwipeableViews>
        </div>
    );
};


Navigation.propTypes = {
    titles: React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired,
    onHandleChange: React.PropTypes.func

};

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
Navigation.defaultProps = {
    titles: [],
    index: 0
}


export default Navigation;