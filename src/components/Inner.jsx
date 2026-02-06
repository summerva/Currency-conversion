import Input from "./Input";

const Inner = (props) => {
    const {
        placeholder,
    } = props
  return (
    <div className="currency_inner">
      <select name="" id="">
        <option value="">-- Выберите валюту --</option>
        <option value="ruble">Российский рубль ₽</option>
        <option value="dollar">Доллар $</option>
        <option value="euro">Евро €</option>
      </select>
          <Input
              placeholder={placeholder}
          />
    </div>
  );
};

export default Inner;
