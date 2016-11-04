import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ContentImg from '../pager/ContentImg';
import ContentCommon from '../pager/ContentCommon';
import {getBrowserPlatform} from '../../util/MyUtil';

const styles = {
    tab: {
        fontSize: 14,
    },
    slide: {
        padding: 5,
        marginLeft : 'auto',
        marginRight : 'auto',
    },

};


const Navigation = ({titles, index, onHandleChange, showProgress,showModal})=> {
    let imageColumn = 4;
    let commonColumn = 3;
    if (getBrowserPlatform() === 'phone') {
        imageColumn = 2;
        commonColumn = 1;
    }

    let titleRows = [];
    let pagerRows = [];
    titles.forEach((title, index)=> {
        titleRows.push(<Tab style={styles.tab} label={title} value={index} key={index}/>);
        if (index == 0) {
            pagerRows.push(<div style={styles.slide} key={index}>
                <ContentImg showProgress={showProgress} column={imageColumn} showModal={showModal}/>
            </div>);
        } else {
            pagerRows.push(<div style={styles.slide} key={index}>
                <ContentCommon  showProgress={showProgress} column={commonColumn} title={title}/>
            </div>);
        }

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