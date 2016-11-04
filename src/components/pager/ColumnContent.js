import React from 'react';
import CardCommon from './CardCommon';
const ColumnContent = (({element, column})=> {
    let elemets = [];
    for (let index in element) {
        let dataInfo = element[index];
        elemets.push(
            <CardCommon key={dataInfo._id} dataInfo={dataInfo}/>
        );
    }

    return (
        <div className={'column-' + column}>
            {elemets}
        </div>
    );
});

ColumnContent.propTypes = {
    element: React.PropTypes.array.isRequired
};

export default ColumnContent;