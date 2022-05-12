import { useState, useEffect } from 'react';
import './LoginHj.scss';
import { useNavigate } from 'react-router-dom';

function LoginHj() {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [isValidate, setIsValidate] = useState(true);

  const navigate = useNavigate();

  // 중요!!!! - 별도 정리할 것
  // useEffect(() => {
  //   checkValidate();
  // });

  const checkValidate = (id, pwd) => {
    // setIsValidate(!(inputId.indexOf('@') > -1 && inputPwd.length >= 5));
    setIsValidate(!(id.indexOf('@') > -1 && pwd.length >= 5));
  };

  const handledInput = event => {
    setInputId(event.target.value);
    checkValidate(event.target.value, inputPwd);
  };

  const handledInputPwd = event => {
    setInputPwd(event.target.value);
    checkValidate(inputId, event.target.value);
  };

  const goToMain = () => {
    navigate('/main-hyeonjoo');
  };

  return (
    <div className="login">
      <section className="loginSection">
        <p className="logo">Westagram</p>
        <input
          className="username"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handledInput}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={handledInputPwd}
        />
        <button className="loginBtn" disabled={isValidate} onClick={goToMain}>
          로그인
        </button>
      </section>
    </div>
  );
}

export default LoginHj;
