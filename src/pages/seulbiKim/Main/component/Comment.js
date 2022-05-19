import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CgRemove } from 'react-icons/cg';

const Comment = ({ commentData, commentRemove }) => {
  const [commentLiked, setCommentLiked] = useState(false);
  const clickedLike = () => {
    setCommentLiked(isLiked => !isLiked);
  };
  return (
    <li>
      <div className="commentsCommented">
        <p>
          <span>{commentData.name}</span>
          {commentData.comment}
        </p>
      </div>
      {commentLiked === false ? (
        <AiOutlineHeart
          className="articleDataIconsHeart"
          onClick={clickedLike}
        />
      ) : (
        <AiFillHeart
          className="articleDataIconsHeart fill"
          onClick={clickedLike}
        />
      )}

      <CgRemove
        className="articleDataIconsRemove"
        id={commentData.id}
        onClick={commentRemove}
      />
    </li>
  );
};

export default Comment;
