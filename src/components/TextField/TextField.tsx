import React from 'react';

interface TextFieldProps {
  inputLabel: string;
  inputType: string;
  inputValue: string;
  outputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  inputLabel,
  inputType,
  inputValue,
  outputChange,
}) => {
  return (
    <div className="form-group">
      <label>{inputLabel}</label>
      <input
        type={inputType}
        value={inputValue}
        onChange={outputChange}
        required
      />
    </div>
  );
};

export default TextField;
