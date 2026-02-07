import { useState, useCallback } from "react";
import Button from "./components/Button";
import Inner from "./components/Inner";

const CURRENCY_RATES = {
  Рубль: 1,
  Доллар: 95.5,
  Евро: 102.3,
  Фунт: 120.1,
};

const App = () => {
  const [fromCurrency, setFromCurrency] = useState("Рубль");
  const [toCurrency, setToCurrency] = useState("Доллар");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [hasError, setHasError] = useState(false);

  const convertCurrency = useCallback((amount, from, to) => {
    if (!amount) return "";
    const fromRate = CURRENCY_RATES[from];
    const toRate = CURRENCY_RATES[to];
    const result = ((parseFloat(amount) * fromRate) / toRate).toFixed(2);
    return result;
  }, []);

  const handleFromAmountChange = (value) => {
    setFromAmount(value);
    if (toCurrency && value) {
      setToAmount(convertCurrency(value, fromCurrency, toCurrency));
    } else {
      setToAmount("");
    }
  };

  const handleToAmountChange = (value) => {
    setToAmount(value);
    if (fromCurrency && value) {
      setFromAmount(convertCurrency(value, toCurrency, fromCurrency));
    } else {
      setFromAmount("");
    }
  };

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setHasError(hasError);
  };

  return (
    <>
      <div className="currency">
        <h1>Конвертор валюты</h1>
        <div className="currency_flex">
          <div className="currency_list">
            <Inner
              placeholder="Сумма"
              amount={fromAmount}
              onAmountChange={handleFromAmountChange}
              currency={fromCurrency}
              onCurrencyChange={setFromCurrency}
              onErrorChange={setHasError}
            />
          </div>
          <div className="currency_list">
            <Inner
              placeholder="Результат"
              amount={toAmount}
              onAmountChange={handleToAmountChange}
              currency={toCurrency}
              onCurrencyChange={setToCurrency}
              onErrorChange={setHasError}
            />
          </div>
        </div>
        <Button className="switch" onClick={handleSwitch}>
          🔄
        </Button>
      </div>
    </>
  );
};

export default App;
