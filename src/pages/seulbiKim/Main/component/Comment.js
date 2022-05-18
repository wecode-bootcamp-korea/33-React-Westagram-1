import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CgRemove } from 'react-icons/cg';

const Comment = ({ commentData, commentRemove }) => {
  return (
    <li>
      <div className="commentsCommented">
        <p>
          <span>{commentData.name}</span>
          {commentData.comment}
        </p>
      </div>
      <AiOutlineHeart className="articleDataIconsHeart" />
      <AiFillHeart className="articleDataIconsHeart fill" />
      <CgRemove
        className="articleDataIconsRemove"
        id={commentData.id}
        onClick={e => {
          commentRemove(e);
        }}
      />
    </li>
  );
};

export default Comment;
