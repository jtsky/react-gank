import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {getBrowserPlatform} from '../../util/MyUtil';
const CardImg = ({dataInfo, showModal})=> {
    let overlay;
    if (getBrowserPlatform() !== 'phone') {
        overlay = <CardTitle title={dataInfo.who} subtitle={dataInfo.desc}/>;
    }


    return (
        <div className="column-img" onClick={()=> showModal(dataInfo.url)}>
            <Card style={{overflow: 'hidden', marginTop: 5, marginRight: 3, padding: 2}}>
                <CardMedia overlay={overlay}>
                    <img src={dataInfo.url}/>
                </CardMedia>
            </Card>
        </div>
    );

};

CardImg.propTypes = {
    dataInfo: React.PropTypes.object.isRequired,
};

export default CardImg;