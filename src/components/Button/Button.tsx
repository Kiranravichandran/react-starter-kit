import React from 'react';
import { useEvent } from '../../utils/eventemitter/EventProvider';

interface ButtonProps {
  inputText: string;
  outputEvent: (data: any) => void;
}

const Button: React.FC<ButtonProps> = ({ inputText, outputEvent }) => {
  const { emit } = useEvent();
  const handleClick = () => {
    emit('ButtonClickEvent', {user:"kiran"});
    outputEvent("Button clicked");
  };
  return (
    <button className="btn" onClick={handleClick}>
      {inputText}
    </button>
  );
};

export default Button;
