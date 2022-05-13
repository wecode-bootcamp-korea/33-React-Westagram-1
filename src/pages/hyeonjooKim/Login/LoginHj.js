import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import './LoginHj.scss';

function LoginHj() {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [isValidate, setIsValidate] = useState(true);

  const navigate = useNavigate();

  const idInputHandler = value => {
    setInputId(value);
    checkValidate(value, inputPwd);
  };

  const pwdInputHandler = value => {
    setInputPwd(value);
    checkValidate(inputId, value);
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
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChangeInput={idInputHandler}
        />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          onChangeInput={pwdInputHandler}
        />
        <button className="loginBtn" disabled={isValidate} onClick={goToMain}>
          로그인
        </button>
      </section>
    </div>
  );
}

// 기존 구현 코드 - 컴포넌트 없이 로그인 페이지로만 구현

// function Login() {
//   const [inputId, setInputId] = useState("");
//   const [inputPwd, setInputPwd] = useState("");
//   const [isValidate, setIsValidate] = useState(true);

//   const navigate = useNavigate();

//   // 중요!!!! - 별도 정리할 것
//   useEffect(() => {
//     checkValidate();
//   });

//   const checkValidate = () => {
//     setIsValidate(!(inputId.indexOf("@") > -1 && inputPwd.length >= 5));
//   };

//   const handledInput = (event) => {
//     setInputId(() => {
//       return event.target.value;
//     });
//   };

//   const handledInputPwd = (event) => {
//     setInputPwd(event.target.value);
//   };

//   const goToMain = () => {
//     navigate("/main");
//   };

//   return (
//     <div className="login">
//       <section className="loginSection">
//         <p className="logo">Westagram</p>
//         <input
//           className="username"
//           type="text"
//           placeholder="전화번호, 사용자 이름 또는 이메일"
//           onChange={handledInput}
//         />
//         <input
//           className="password"
//           type="password"
//           placeholder="비밀번호"
//           onChange={handledInputPwd}
//         />
//         <button className="loginBtn" disabled={isValidate} onClick={goToMain}>
//           로그인
//         </button>
//       </section>
//     </div>
//   );
// }

export default LoginHj;
