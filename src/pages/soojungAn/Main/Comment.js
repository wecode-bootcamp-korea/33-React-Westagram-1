import React from 'react';

const Comment = props => {
  return (
    <div className="commentLetter">
      <div className="commentLetterLeft">
        <span className="commentNickname">{props.user.nickname}</span>
        <span>{props.user.comment}</span>
      </div>
      <div className="commentLetterRight">
        <i
          className="fa-solid fa-trash commentDelete"
          // id={props.user.id}
          // onClick={e => {
          //   remove(e);
          // }}
        />
        <i className="fa-regular fa-heart commentHeart" />
      </div>
    </div>
  );
};

export default Comment;
