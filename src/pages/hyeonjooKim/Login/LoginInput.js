import './LoginInput.scss';

const LoginInput = ({ onChangeInput, type, name, placeholder }) => {
  const handledInput = event => {
    onChangeInput(event.target.value);
  };

  // const handledInput = event => {
  //   onChangeInput(event.target.name, event.target.value);
  // };

  return (
    <input
      type={type}
      // name={name}
      placeholder={placeholder}
      onChange={handledInput}
    />
  );
};

export default LoginInput;
