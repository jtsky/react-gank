import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const CardCommon = ({dataInfo,})=> {
    return (
        <div className="column-img">
            <Card style={{overflow: 'hidden', marginTop: 5, marginRight : 5}}>
                <CardTitle title={dataInfo.who}/>
                <CardText>
                    <strong>描述:</strong>{dataInfo.desc}
                    <br/>
                    <strong>地址:</strong><a href={dataInfo.url} target="_blank">{dataInfo.url}</a>
                </CardText>
            </Card>
        </div>
    );
};

CardCommon.propTypes = {
    dataInfo: React.PropTypes.object.isRequired,
};

export default CardCommon;