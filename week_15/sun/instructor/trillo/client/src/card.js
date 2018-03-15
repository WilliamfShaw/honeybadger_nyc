import React from 'react';

const Card = ({ task, is_completed, handleCardDelete, handleCardFinish, id }) => {
    const cardClass = is_completed ? 'done' : 'todo';

    return (
        <li className={`card ${cardClass}`} data-id={id}>
            {task}
            <span className='delete' onClick={handleCardDelete}>X</span>
            {is_completed ? '' : <span className='finish' onClick={handleCardFinish}>Finish</span>}
        </li>
    )
}

export default Card;
