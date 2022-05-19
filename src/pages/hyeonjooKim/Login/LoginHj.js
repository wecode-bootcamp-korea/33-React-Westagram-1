import { useState, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import './LoginHj.scss';

const inputReducer = (state, action) => {
  if (action.type === 'email_INPUT') {
    return {
      emailValue: action.val,
      passwordValue: state.passwordValue,
      emailIsValid: action.val.includes('@'),
      passwordIsValid: state.passwordIsValid,
    };
  }
  if (action.type === 'password_INPUT') {
    return {
      emailValue: state.emailValue,
      passwordValue: action.val,
      emailIsValid: state.emailIsValid,
      passwordIsValid: action.val.trim().length >= 5,
    };
  }
  return {
    emailValue: '',
    passwordValue: '',
    emailIsValid: false,
    passwordIsValid: false,
  };
};

function LoginHj() {
  // const [input, setInput] = useState({
  //   email: '',
  //   password: '',
  // });

  const [inputState, dispatchInput] = useReducer(inputReducer, {
    emailValue: '',
    passwordValue: '',
    emailIsValid: false,
    passwordIsValid: false,
  });

  // const [isValidate, setIsValidate] = useState(false);

  const navigate = useNavigate();

  const inputHandler = (key, value) => {
    dispatchInput({ type: `${key}_INPUT`, val: value });

    // setInput(prevState => {
    //   return { ...prevState, [key]: value };
    // });
  };

  // const checkValidate = (id, pwd) => {
  //   const validation = id.indexOf('@') > -1 && pwd.trim().length >= 5;
  //   setIsValidate(validation);
  // };

  // useEffect(() => {
  //   const timeid = setTimeout(() => {
  //     checkValidate(input.email, input.password);
  //   }, 300);
  //   return () => {
  //     clearTimeout(timeid);
  //   };
  // }, [input.email, input.password]);

  // 로그인 구현
  const login = () => {
    // navigate('/main-hyeonjoo');
    // fetch('http://10.58.3.39:8000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify(input),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.TOKEN) {
    //       localStorage.setItem('token', result.TOKEN);
    //       navigate('/main-hyeonjoo');
    //     }
    //   });

    // 서버 동작 안할 때를 대비한 navigate 함수로 서버 동작시에는 아래 함수 지울 것
    navigate('/main-hyeonjoo');
  };

  // 회원가입 구현
  // const signUp = () => {
  //   fetch('http://10.58.3.39:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify(input),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.MESSAGE === 'SUCCESS') {
  //         alert('회원가입에 성공하셨습니다.');
  //       }
  //     });
  // };

  return (
    <div className="login">
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
        <button
          className="loginBtn"
          // disabled={!isValidate}
          disabled={!(inputState.emailIsValid && inputState.passwordIsValid)}
          onClick={login}
        >
          로그인
        </button>
        {/* <button className="signUpBtn" disabled={!isValidate} onClick={signUp}>
          회원가입
        </button> */}
      </section>
    </div>
  );
}

export default LoginHj;
