import React from 'react';

const Card = ({ task, is_completed }) => {
    const cardClass = is_completed ? 'done' : 'todo';

    return (
        <li className={`card ${cardClass}`}>
            {task}
            <span className='delete'>X</span>
            {is_completed ? '' : <span className='finish'>Finish</span>}
        </li>
    )
}

export default Card;
