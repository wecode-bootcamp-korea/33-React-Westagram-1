import React from 'react';

const Comment = ({ eachComment, i, remove }) => {
  return (
    <div className="commentLetter">
      <div className="commentLetterLeft">
        <span className="commentNickname">Naman_himdurum</span>
        <span>{eachComment}</span>
      </div>
      <div className="commentLetterRight">
        <i
          className="fa-solid fa-trash commentDelete"
          id={i}
          onClick={e => {
            remove(e);
          }}
        />
        <i className="fa-regular fa-heart commentHeart" />
      </div>
    </div>
  );
};

export default Comment;
