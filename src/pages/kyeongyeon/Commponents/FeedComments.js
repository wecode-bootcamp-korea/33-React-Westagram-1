import React, { useState } from 'react';
import './FeedComments.scss';

const FeedComments = ({ comment, onRemove }) => {
  const { id, text, name } = comment;

  const [likedHeart, setLikedHeart] = useState(false);
  const changeColor = e => {
    e.preventDefault(); //새로고침
    e.target.src = likedHeart
      ? 'images/kyeongyeon/emptyheart.png'
      : 'images/kyeongyeon/heart123.png';
    setLikedHeart(!likedHeart);
  };

  return (
    <div className="commentNameTextContainer">
      <div className="flexNameTextIcon">
        <div className="flexNameTextContainer">
          <div className="commentName">{name}</div>
          <div className="commentText">{text}</div>
        </div>
        <div className="heartDeleteIcon">
          <img
            className="feedCommentHeart"
            src="/images/kyeongyeon/emptyheart.png"
            alt="heart"
            onClick={changeColor}
            width="15px"
          />
          <i
            className="fa-solid fa-xmark"
            id="deleteImg"
            onClick={() => onRemove(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedComments;
