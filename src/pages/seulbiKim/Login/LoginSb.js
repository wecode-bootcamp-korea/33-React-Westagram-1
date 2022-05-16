import React, { useState } from 'react';
import './LoginSb.scss';
import { useNavigate } from 'react-router-dom';

const LoginSb = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-seulbiKim');
  };

  let [input, setInput] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = input;

  const onChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="loginPage">
      <div className="login">
        <main className="loginContainer">
          <h1 className="loginLogo">westagram</h1>
          <form className="loginForm" action="./main.html">
            <input
              name="id"
              type="text"
              className="loginInputId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={onChange}
            />
            <input
              name="pw"
              type="password"
              className="loginInputPw"
              placeholder="비밀번호"
              onChange={onChange}
            />
            <button
              className="loginBtn"
              onClick={goToMain}
              disabled={id.includes('@') && pw.length >= 5 ? false : true}
            >
              로그인
            </button>
          </form>
          <div className="message">
            <a className="text" href="/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginSb;
