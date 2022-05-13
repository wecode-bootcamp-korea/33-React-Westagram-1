import { useState } from 'react';
import './InputReply.scss';

const InputReply = ({ onInputReply }) => {
  const [inputText, setInputText] = useState('');
  const [isValidate, setIsValidate] = useState(true);

  // form 태그를 사용하면 엔터나 버튼 클릭을 모두 submit으로 인식한다.
  const replyHandler = event => {
    event.preventDefault();
    if (inputText.length !== 0) {
      onInputReply(inputText); // 엔터키를 누를 때만 입력 값을 부모의 함수에 전달
      setInputText(''); // 양방향 바인딩
      setIsValidate(true);
    }
    return;
  };

  // 양방향 바인딩 적용을 위한 별도 함수(state 저장 목적)
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
