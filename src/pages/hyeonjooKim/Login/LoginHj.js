import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import './LoginHj.scss';

function LoginHj() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [isValidate, setIsValidate] = useState(false);

  const navigate = useNavigate();

  const inputHandler = (key, value) => {
    setInput(prevState => {
      return { ...prevState, [key]: value };
    });
  };

  const checkValidate = (id, pwd) => {
    const validation = id.indexOf('@') > -1 && pwd.trim().length >= 5;
    setIsValidate(validation);
  };

  const login = () => {
    navigate('/main-hyeonjoo');
    fetch('http://10.58.3.39:8000/users/login', {
      method: 'POST',
      body: JSON.stringify(input),
    })
      .then(response => response.json())
      .then(result => {
        if (result.TOKEN) {
          localStorage.setItem('token', result.TOKEN);
          navigate('/main-hyeonjoo');
        }
      });
  };

  const signUp = () => {
    fetch('http://10.58.3.39:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify(input),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('회원가입에 성공하셨습니다.');
        }
      });
  };

  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(input.email, input.password);
    }, 300);
    return () => {
      clearTimeout(timeid);
    };
  }, [input.email, input.password]);

  return (
    <div className="loginHj">
      <section className="loginSection">
        <p className="logo">Westagram</p>
        <LoginInput
          type="text"
          name="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChangeInput={inputHandler}
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="비밀번호"
          onChangeInput={inputHandler}
        />
        <button className="loginBtn" disabled={!isValidate} onClick={login}>
          로그인
        </button>
        <button className="signUpBtn" disabled={!isValidate} onClick={signUp}>
          회원가입
        </button>
      </section>
    </div>
  );
}

export default LoginHj;
