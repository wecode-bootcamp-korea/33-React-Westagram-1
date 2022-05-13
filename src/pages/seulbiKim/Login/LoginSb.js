import React from 'react';
import './LoginSb.scss';
import { Link, useNavigate } from 'react-router-dom';

const LoginSb = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seulbiKim');
  };

  return (
    <div className="loginPage">
      <div className="login">
        <main className="loginContainer">
          <h1 className="loginLogo">westagram</h1>
          <form className="loginForm" action="./main.html">
            <input
              type="text"
              className="loginInputId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="loginInputPw"
              placeholder="비밀번호"
            />
            <button className="loginBtn" onClick={goToMain}>
              로그인
            </button>
          </form>
          <div className="message">
            <a className="text" href="#">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginSb;
