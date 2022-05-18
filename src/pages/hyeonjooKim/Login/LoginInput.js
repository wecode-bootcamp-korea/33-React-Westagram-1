import './LoginInput.scss';

const LoginInput = ({ onChangeInput, name, type, placeholder }) => {
  const InputHandler = event => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={InputHandler}
    />
  );
};

export default LoginInput;
