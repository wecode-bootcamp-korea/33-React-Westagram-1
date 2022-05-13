import { useNavigate } from 'react-router-dom';
import './LoginKy.scss';

const LoginKy = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="login">
      s
      <section>
        <div className="loginPage">
          <div className="boxInstagram">
            <h1>Westagram</h1>
            <div className="userID">
              <input
                type="text"
                id="idInput"
                value=""
                title="사용자 입력"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>

            <div className="userPW">
              <input
                type="password"
                id="pwInput"
                value=""
                title="사용자 입력"
                placeholder="비밀번호"
              />
            </div>

            <div className="btnLogin">
              <button
                type="button"
                id="activeButton"
                onclick=" location.href = 'mainpage.html'"
                disabled
              >
                로그인
              </button>
              <button onClick={goToMain}>메인페이지로 이동하기</button>
            </div>

            <p>
              <a href="">비밀번호를 잊으셨나요?</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginKy;
