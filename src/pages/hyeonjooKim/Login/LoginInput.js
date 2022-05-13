import './LoginInput.scss';

const LoginInput = ({ onChangeInput, type, placeholder }) => {
  const handledInput = event => {
    onChangeInput(event.target.value);
  };

  return (
    <input type={type} placeholder={placeholder} onChange={handledInput} />
  );
};

export default LoginInput;
