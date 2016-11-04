import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
const CardImg = ({dataInfo, showModal})=> {

    return (
        <div className="column-img" onClick={()=> showModal(dataInfo.url)}>
            <Card style={{overflow: 'hidden', marginTop: 5, marginRight: 5, padding: 2}}>
                <CardMedia overlay={<CardTitle title={dataInfo.who} subtitle={dataInfo.desc}/>}>
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