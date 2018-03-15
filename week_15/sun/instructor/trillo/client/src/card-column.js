import React from 'react';
import Card from './card';

const CardColumn = ({ heading, handleCardDelete, handleCardFinish, cards }) => {
    return (
        <div id={`${heading}-column`} className='column'>
            <h2 className='column-heading'>{heading.toUpperCase()}</h2>
            <ul className='card-list'>
              {
                  cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                id={card.id}
                                task={card.task}
                                is_completed={card.is_completed}
                                handleCardDelete={handleCardDelete}
                                handleCardFinish={handleCardFinish}
                            />
                        )
                  })
              }
            </ul>
        </div>
    )
};

export default CardColumn;
