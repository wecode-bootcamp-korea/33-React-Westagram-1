import React from 'react';
import './LoginHr.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginHr = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/MainHr');
  };

  const handleIdInput = event => {
    setInputId(event.target.value);
  };
  const handlePwInput = event => {
    setInputPw(event.target.value);
  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="lineBox">
            <div className="contentsBox">
              <div className="logo">
                <span className="logoName">Westagram</span>
              </div>
              <div className="loginBox">
                <div className="inputs">
                  <div className="input1">
                    <input
                      type="text"
                      className="id"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                      onChange={handleIdInput}
                    />
                  </div>
                  <div className="input1">
                    <input
                      type="password"
                      className="pw"
                      placeholder="비밀번호"
                      onChange={handlePwInput}
                    />
                  </div>
                </div>
                <div className="btnBox">
                  <button
                    className="loginBtn"
                    type="button"
                    onClick={goToMain}
                    disabled={
                      inputId.includes('@') && inputPw.length >= 5
                        ? false
                        : true
                    }
                  >
                    로그인
                  </button>
                </div>
              </div>
              <div className="findBox">
                <a href="#!" className="findPw">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHr;
