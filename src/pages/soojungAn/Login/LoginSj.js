import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginSj.scss';

function LoginSj() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-soojungAn');
  };

  const [inputs, setInput] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const valid = id.includes('@') && pw.length >= 5;

  return (
    <div className="loginSj">
      <div className="loginContainer">
        <h1 className="title">Westagram</h1>
        <form type="submit" className="loginArea">
          <input
            id="emailInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
            value={id}
            name="id"
          />
          <input
            id="pswInput"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
            value={pw}
            name="pw"
          />
          <button
            type="submit"
            className={'loginBtn ' + (valid ? 'btnActive' : '')}
            disabled={!valid}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <footer className="findPsw">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </div>
  );
}

export default LoginSj;
