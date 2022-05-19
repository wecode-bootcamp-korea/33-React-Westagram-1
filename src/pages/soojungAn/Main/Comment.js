import React from 'react';

const Comment = ({ user, remove, clickHeart }) => {
  const { id, nickname, comment, isLiked } = user;

  return (
    <div className="commentLetter">
      <div className="commentLetterLeft">
        <span className="commentNickname">{nickname}</span>
        <span>{comment}</span>
      </div>
      <div className="commentLetterRight">
        <i
          className="fa-solid fa-trash commentDelete"
          id={id}
          onClick={remove}
        />
        <i
          className={
            'fa-regular fa-heart commentHeart ' +
            (isLiked ? 'heartBtnColor' : '')
          }
          id={id}
          onClick={clickHeart}
        />
      </div>
    </div>
  );
};

export default Comment;
