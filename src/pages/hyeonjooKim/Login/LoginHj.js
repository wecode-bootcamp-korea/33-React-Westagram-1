import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import './LoginHj.scss';

function LoginHj() {
  const [idInput, setIdInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [isValidate, setIsValidate] = useState(false);

  const navigate = useNavigate();

  const inputIdHandler = value => setIdInput(value);

  const inputPwdHandler = value => setPwdInput(value);

  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(idInput, pwdInput);
    }, 300);
    return () => {
      clearTimeout(timeid);
    };
  }, [idInput, pwdInput]);

  const checkValidate = (id, pwd) => {
    const validation = id.indexOf('@') > -1 && pwd.trim().length >= 5;
    setIsValidate(validation);
  };

  const goToMain = () => {
    navigate('/main-hyeonjoo');
  };

  return (
    <div className="login">
      <section className="loginSection">
        <p className="logo">Westagram</p>
        <LoginInput
          type="text"
          name="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChangeInput={inputIdHandler}
        />
        <LoginInput
          type="password"
          name="pwd"
          placeholder="비밀번호"
          onChangeInput={inputPwdHandler}
        />
        <button className="loginBtn" disabled={!isValidate} onClick={goToMain}>
          로그인
        </button>
      </section>
    </div>
  );
}

export default LoginHj;
