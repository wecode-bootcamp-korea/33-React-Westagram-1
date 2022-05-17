import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.comment2.map(function (a) {
        return <li>{a}</li>;
      })}
    </div>
  );
};

export default Comment;
