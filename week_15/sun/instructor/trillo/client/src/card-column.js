import React from 'react';

const CardColumn = ({ heading }) => {
    return (
        <div id={`${heading}-column`} className='column'>
            <h2 className='column-heading'>{heading.toUpperCase()}</h2>
            <ul className='card-list'></ul>
        </div>
    )
};

export default CardColumn;
