import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import './LoginHj.scss';

function LoginHj() {
  const [input, setInput] = useState({
    id: '',
    pwd: '',
  });

  const [isValidate, setIsValidate] = useState(true);

  const navigate = useNavigate();

  const InputHandler = (key, value) => {
    setInput(prevState => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    key === 'id'
      ? checkValidate(value, input.pwd)
      : checkValidate(input.id, value);
  };

  const checkValidate = (id, pwd) => {
    setIsValidate(!(id.indexOf('@') > -1 && pwd.length >= 5));
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
          onChangeInput={InputHandler}
        />
        <LoginInput
          type="password"
          name="pwd"
          placeholder="비밀번호"
          onChangeInput={InputHandler}
        />
        <button className="loginBtn" disabled={isValidate} onClick={goToMain}>
          로그인
        </button>
      </section>
    </div>
  );
}

export default LoginHj;
