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

  // const signUp = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.4.225:8000/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: id,
  //       password: pw,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.access_token) {
  //         localStorage.setItem('token', data.access_token);
  //       }
  //     });
  // };

  // const token = localStorage.getItem('token');
  // console.log(token);

  return (
    <div className="login">
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
            // onClick={e => {
            //   signUp(e);
            // }}
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
