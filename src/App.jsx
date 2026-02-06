import Button from "./components/Button";
import Inner from "./components/Inner";

const App = () => {
  return (
    <>
      <div className="currency">
        <h1>Конвертор валюты</h1>
        <div className="currency_flex">
          <div className="currency_list">
            <Inner
            placeholder='Рубль'
            />
          </div>
          <div className="currency_list">
            <Inner
            placeholder='Доллар'
            />
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default App;
