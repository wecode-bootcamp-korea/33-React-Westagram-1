import { useState } from 'react';
import './InputReply.scss';

const InputReply = ({ onInputReply }) => {
  const [inputText, setInputText] = useState('');
  const [isValidate, setIsValidate] = useState(true);

  const replyHandler = event => {
    event.preventDefault();
    if (inputText.length !== 0) {
      onInputReply(inputText);
      setInputText('');
      setIsValidate(true);
    }
    return;
  };

  const replySave = event => {
    setInputText(event.target.value);
    setIsValidate(false);
  };

  return (
    <form className="replySection" onSubmit={replyHandler}>
      <input
        type="text"
        className="reply"
        placeholder=" 댓글 달기..."
        value={inputText}
        onChange={replySave}
      />
      <button type="submit" disabled={isValidate}>
        게시
      </button>
    </form>
  );
};

export default InputReply;
