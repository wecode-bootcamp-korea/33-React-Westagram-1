import { useState } from 'react';
import './Reply.scss';

const Reply = ({ onClickDeleteBtn, userName, content, id }) => {
  const [isClickLikeBtn, setisClickLikeBtn] = useState(false);

  const likeButtonHandeler = event => {
    event.preventDefault();
    event.target.style.color = isClickLikeBtn
      ? 'rgb(255, 0, 0)'
      : 'rgb(92, 92, 92)';
    setisClickLikeBtn(!isClickLikeBtn);
  };

  const deleteButtonHandeler = event => {
    event.preventDefault();
    onClickDeleteBtn(id);
  };

  return (
    <div className="replyContainer">
      <span>{userName}</span>
      <span>{content}</span>
      <button className="btnLike" onClick={likeButtonHandeler}>
        <i className="fa-solid fa-heart" />
      </button>
      <button className="btnRemove" onClick={deleteButtonHandeler}>
        <i className="fa-solid fa-trash-can" />
      </button>
    </div>
  );
};

export default Reply;
