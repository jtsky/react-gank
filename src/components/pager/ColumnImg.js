import React from 'react';
import CardImg from './CardImg';
const ColumnImg = (({element, showModal, column})=> {
    let elemets = [];
    for (let index in element) {
        let dataInfo = element[index];
        elemets.push(
            <CardImg key={dataInfo._id} dataInfo={dataInfo} showModal={showModal} />
        );
    }

    return (
        <div className={'column-' + column}>
            {elemets}
        </div>
    );
});

ColumnImg.propTypes = {
    element: React.PropTypes.array.isRequired
};

export default ColumnImg;