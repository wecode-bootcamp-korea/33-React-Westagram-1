import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSb.scss';

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
  const isInputValid = id.includes('@') && pw.length >= 5;

  const onChangeInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // 로그인 통신
  const loginPost = e => {
    e.preventDefault();
    fetch('http://10.58.4.15:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          // localStorage에 token 저장
          localStorage.setItem('token', result.access_token);
          goToMain();
        }
      });
  };

  // localStorage에서 token 가져오기
  // let token = localStorage.getItem('token') || '';

  // 회원가입 통신
  // const signUpPost = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.4.15:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       id: id,
  //       pw: pw,
  //       name: 'seul',
  //       phonenumber: '01012345678',
  //       personal: 'test',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과: ', result));
  // };

  return (
    <div className="loginSb">
      <div className="login">
        <main className="loginContainer">
          <h1 className="loginLogo">westagram</h1>
          {/* <form className="loginForm" action="./main.html"> */}
          <form className="loginForm">
            <input
              name="id"
              type="text"
              className="loginInputId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={onChangeInput}
            />
            <input
              name="pw"
              type="password"
              className="loginInputPw"
              placeholder="비밀번호"
              onChange={onChangeInput}
            />
            <button
              className="loginBtn"
              // onClick={goToMain}
              onClick={loginPost}
              // onClick={signUpPost}
              disabled={!isInputValid}
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
