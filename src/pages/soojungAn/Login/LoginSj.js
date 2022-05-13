import { Link, useNavigate } from 'react-router-dom';
import './LoginSj.scss';

function LoginSj() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-soojungAn');
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="title">Westagram</h1>
        <section className="loginArea">
          <input
            id="emailInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="pswInput" type="password" placeholder="비밀번호" />
          <button className="loginBtn" disabled onClick={goToMain}>
            로그인
          </button>
        </section>
        <footer className="findPsw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </footer>
        {/* <Link to="/main">메인페이지로 이동하기</Link>
              <button onClick={goToMain}>메인페이지로가기</button> */}
      </div>
    </div>
  );
}

export default LoginSj;
