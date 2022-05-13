import React from 'react';
import './LoginSb.scss';
import { Link, useNavigate } from 'react-router-dom';

const LoginSb = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seulbiKim');
  };

  return (
    <div className="login-page">
      <div className="login">
        <main className="login__container">
          <h1 className="login__logo">westagram</h1>
          <form className="login__form" action="./main.html">
            <input
              type="text"
              className="login__input-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="login__input-pw"
              placeholder="비밀번호"
            />
            <button className="login__btn" onClick={goToMain}>
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
