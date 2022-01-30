import React from 'react'
import './Input.css';

interface InputProps {
  id?: string;
  value: string;
  placeholder?: string;
  classes?: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  value,
  placeholder,
  classes,
  handleInput,
}) => {
  return (
    <input
      id={id ?? ''}
      className={`form-control ${classes ?? ''}`.trim()}
      value={value}
      type="text"
      placeholder={placeholder ?? ''}
      onChange={handleInput}
    ></input>
  );
}
export default React.memo(Input);