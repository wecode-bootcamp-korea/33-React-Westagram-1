import './LoginInput.scss';

const LoginInput = ({ onChangeInput, type, placeholder }) => {
  const InputHandler = event => {
    const { value } = event.target;
    onChangeInput(value);
  };

  return (
    <input type={type} placeholder={placeholder} onChange={InputHandler} />
  );
};

export default LoginInput;
