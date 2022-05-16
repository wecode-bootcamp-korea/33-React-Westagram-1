import React from 'react';

const FeedComments = ({ comment }) => {
  const { text, name } = comment;
  return (
    <div className="commentNameTextContainer">
      <div className="commentName">{name}</div>
      <div className="commenttext">{text}</div>
    </div>
  );
};

export default FeedComments;
