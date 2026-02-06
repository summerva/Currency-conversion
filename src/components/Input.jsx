const Input = (props) => {
    const {
        placeholder,
    } = props
  return (
    <div className="currency_input">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
