import React from 'react';

const FeedComments = props => {
  return (
    <div className="InputCommentAlign">
      <div className="commentUserId">{props.userName}</div>
      <div className="commentUserText">{props.userComment}</div>
    </div>
  );
};

export default FeedComments;
