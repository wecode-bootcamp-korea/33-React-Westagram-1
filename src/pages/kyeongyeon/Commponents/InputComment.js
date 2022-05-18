import React, { useState } from 'react';
import './InputComment.scss';

const InputComment = ({ addComment }) => {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value); //입력한 값을 받을거야!!!!!!!!!!!!
  };
  const onSubmit = e => {
    addComment(value); //input에 쓴 값이 되어야 함
    setValue('');

    e.preventDefault();
  };
  return (
    <form className="commentSubmit" onSubmit={onSubmit}>
      <div className="commentBackground">
        <div className="comments">
          <ul className="commentsBox" />
          <input
            className="commentsInput"
            type="text"
            placeholder="댓글입력"
            onChange={onChange}
            value={value}
          />
          <button className="commentsBtn" type="submit">
            게시
            {/*클릭을 하면 받은 값을 addComment에 저장해줄거임*/}
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputComment;
