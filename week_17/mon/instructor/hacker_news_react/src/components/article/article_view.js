import React from 'react';

const ArticleView = ({ title, author, openModal }) => {
    return (
        <div onClick={openModal}>
            <h1>{title}</h1>
            <h3>{`Author: ${author}`}</h3>
        </div>
    )
}

export default ArticleView;
