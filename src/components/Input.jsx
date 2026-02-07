import { useState, useEffect } from "react";

const Input = (props) => {
  const { placeholder, value, onChange, onErrorChange } = props;
  const [hasError, setHasError] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    
    const hasNonDigits = /[^0-9]/.test(input);
    
    if (hasNonDigits) {
      setHasError(true);
    } else {
      setHasError(false);
      onErrorChange?.(false);
      const result = input.replace(/\D/g, '');
      onChange(result);
    }
  };

  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => {
        setHasError(false);
        onErrorChange?.(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasError, onErrorChange]);

  return (
    <div className="currency_input">
      <input
        type="text"
        placeholder={placeholder}
        value={value || ''}
        onChange={handleChange}
        className={hasError ? 'error' : ''}
      />
      {hasError && (
        <div className="error-message">
          Только цифры!
        </div>
      )}
    </div>
  );
};

export default Input;
