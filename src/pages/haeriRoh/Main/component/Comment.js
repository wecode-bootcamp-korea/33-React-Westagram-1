import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.comment2.map(function (a) {
        return (
          <div className="myComment">
            <b>yesharryy</b> {a}
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
