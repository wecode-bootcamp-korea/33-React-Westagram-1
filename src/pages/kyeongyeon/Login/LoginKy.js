import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './LoginKy.scss';

const LoginKy = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-kyeongyeon');
  };

  const [inputId, setInputId] = useState(''); //useState를 사용해서 변하는 값을 set함수로 받음
  const [inputPw, setInputPw] = useState('');

  const handleInputId = e => {
    // input data에 변화가 있을때마다 value값을 변경해서 useState해줌
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  return (
    <div className="login">
      <section>
        <div className="loginPage">
          <div className="boxInstagram">
            <h1>Westagram</h1>
            <div className="userID">
              <input
                onChange={handleInputId}
                type="text"
                value={inputId}
                title="사용자 입력"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>

            <div className="userPW">
              <input
                onChange={handleInputPw}
                type="password"
                value={inputPw}
                title="사용자 입력"
                placeholder="비밀번호"
              />
            </div>

            <div className="btnLogin">
              <button
                onClick={goToMain}
                type="button"
                id="activeButton"
                disabled={
                  inputId.includes('@') && inputPw.length > 4 ? false : true
                }
              >
                로그인
              </button>
              {/* <button onClick={goToMain}>메인페이지로 이동하기</button> */}
            </div>

            <p>
              <a href="#!">비밀번호를 잊으셨나요?</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginKy;
