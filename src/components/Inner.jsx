import Input from "./Input";

const CURRENCY_SYMBOLS = {
  'Рубль': '₽',
  'Доллар': '$',
  'Евро': '€', 
  'Фунт': '£'
};

const Inner = (props) => {
  const {
    placeholder,
    amount,
    onAmountChange, 
    currency,
    onCurrencyChange,
    onErrorChange,
  } = props;

  const handleChange = (e) => {
    onCurrencyChange(e.target.value);
  };

  const currencySymbol = CURRENCY_SYMBOLS[currency] || '';

  return (
    <div className="currency_inner">
      <select 
        name="value" 
        id="value" 
        value={currency}
        onChange={handleChange}
      >
        <option value="">-- Выберите валюту --</option>
        <option value="Рубль">Российский рубль</option>
        <option value="Доллар">Доллар</option>
        <option value="Евро">Евро</option>
        <option value="Фунт">Фунт стерлинга</option>
      </select>
      
      <div className="input-with-symbol">
        <div className="currency_input">
          <Input 
            placeholder={placeholder}
            value={amount}
            onChange={onAmountChange}
            onErrorChange={onErrorChange}
          />
        </div>
        <span className="currency-symbol">{currencySymbol}</span>
      </div>
    </div>
  );
};

export default Inner;
