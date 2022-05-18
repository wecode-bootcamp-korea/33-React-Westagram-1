import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './LoginKy.scss';

const LoginKy = () => {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState(''); //useState를 사용해서 변하는 값을 set함수로 받음
  const [inputPw, setInputPw] = useState('');
  /*   const [inputPhone, setInputPhone] = useState(''); //회원가입
  const [inputName, setInputName] = useState(''); */

  /*   const goToMain = e => {
    navigate('/main-kyeongyeon');
  }; */

  /*   const signUp = e => { //이거는 회원가입
    fetch('http://10.58.3.119:8000/users/signup', {
      method: 'post',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
        contact: inputPhone,
        name: inputName,
      }),
    }) //덩어리 제이슨을 받아옴
      .then(res => res.json()) //덩어리 제이슨을 객체 현태로 변환
      .then(data => {
        console.log(data);
        if (data.ACCESS_TOKEN) localStorage.setItem('token', data.ACCESS_TOKEN);
      });
    e.preventDefault();
  }; */

  const goToMain = e => {
    navigate('/main-kyeongyeon');
    e.preventDefault();
  };

  /*   const userToken = localStorage.getItem('token'); //토큰값 가져옴
  console.log(userToken);
 */
  /* useEffect(() => {
    fetch('http://10.58.3.119:8000/users/signin', {
      method: 'post',
      body: JSON.stringify({
        name: 'yeri',
        batch: 1,
      }),
    }) //덩어리 제이슨을 받아옴
      .then(res => res.json()) //덩어리 제이슨을 객체 현태로 변환
      .then(data => {
       
        goToMain(data);
      }); //변환된 제이슨 덩어리를 setCommentList에 저장해서 관리
  }, []); */

  const handleInputId = e => {
    // input data에 변화가 있을때마다 value값을 변경해서 useState해줌
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  /*   const handleInputName = e => { //회원가입
    setInputName(e.target.value);
  };

  const handleInputPhone = e => {
    setInputPhone(e.target.value);
  }; */

  return (
    <div className="login">
      <section>
        <div className="loginPage">
          <div className="boxInstagram">
            <h1>Westagram</h1>
            <div className="userID">
              <input
                onChange={handleInputId}
                type="text"
                value={inputId}
                title="사용자 입력"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>

            <div className="userPW">
              <input
                onChange={handleInputPw}
                type="password"
                value={inputPw}
                title="사용자 입력"
                placeholder="비밀번호"
              />
            </div>
            {/*    <div className="userPW">//회원가입
              <input
                onChange={handleInputPhone}
                type="text"
                value={inputPhone}
                title="사용자 입력"
                placeholder="phone"
              />
            </div>
            <div className="userPW">
              <input
                onChange={handleInputName}
                type="text"
                value={inputName}
                title="사용자 입력"
                placeholder="이름"
              />
            </div> */}

            <div className="btnLogin">
              <button
                onClick={goToMain}
                /* onClick={signUp} */ //회원가입
                type="button"
                id="activeButton"
                disabled={
                  inputId.includes('@') && inputPw.length > 4 ? false : true
                }
              >
                로그인
              </button>

              {/* <button onClick={goToMain}>메인페이지로 이동하기</button> */}
            </div>

            <p>
              <a href="#!">비밀번호를 잊으셨나요?</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginKy;
