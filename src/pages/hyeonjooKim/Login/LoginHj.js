import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import './LoginHj.scss';

function LoginHj() {
  const [idInput, setIdInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');

  // const [input, setInput] = useState({
  //   id: '',
  //   pwd: '',
  // });

  const [isValidate, setIsValidate] = useState(true);

  const navigate = useNavigate();

  const inputIdHandler = value => setIdInput(value);

  const inputPwdHandler = value => setPwdInput(value);

  // 입력 키마다 유효성을 확인하는 것은 효율적이지 못하므로,
  // setTimeOut을 활용, 특정시간(0.3s) 키 입력을 멈췄을 때만 유효성을 검사하도록 함
  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(idInput, pwdInput);
    }, 300);
    return () => {
      return clearTimeout(timeid);
    };
  }, [idInput, pwdInput]);

  // const inputHandler = (key, value) => {
  //   setInput(prevState => {
  //     return {
  //       ...prevState,
  //       [key]: value,
  //     };
  //   });
  //   key === 'id'
  //     ? checkValidate(value, input.pwd)
  //     : checkValidate(input.id, value);
  // };

  const checkValidate = (id, pwd) => {
    setIsValidate(!(id.indexOf('@') > -1 && pwd.trim().length >= 5));
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

        {/* 하나의 함수로만 구현할 경우 */}
        {/* <LoginInput
          type="text"
          name="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChangeInput={inputHandler}
        />
        <LoginInput
          type="password"
          name="pwd"
          placeholder="비밀번호"
          onChangeInput={inputHandler}
        /> */}
        <button className="loginBtn" disabled={isValidate} onClick={goToMain}>
          로그인
        </button>
      </section>
    </div>
  );
}

export default LoginHj;
