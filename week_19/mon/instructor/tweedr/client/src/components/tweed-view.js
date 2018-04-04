import React from 'react';

const TweedView = ({ deleteTweed, content, author, id }) => {
    return (
        <div className="tweed">
            <p className="content">{content}</p>
            <p className="author">{author}</p>
            <p className="delete" id={id} onClick={deleteTweed}>delete</p>
        </div>
    );
}

export default TweedView;
