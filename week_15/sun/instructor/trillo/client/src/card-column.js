import React from 'react';
import Card from './card';

const CardColumn = ({ heading }) => {
    return (
        <div id={`${heading}-column`} className='column'>
            <h2 className='column-heading'>{heading.toUpperCase()}</h2>
            <ul className='card-list'>
                <Card
                    task={'WHATUP'}
                    is_completed={true}
                />
                <Card
                    task={'WHATUP SHOULD BE FALSE'}
                    is_completed={false}
                />
            </ul>
        </div>
    )
};

export default CardColumn;
