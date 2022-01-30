import React from 'react'
import './FormGroup.css';
import Input from '../../atoms/Input/Input';

interface FormGroupProps {
  htmlFor: string;
  label: string;
  value: string;
  formClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormGroup: React.FC<FormGroupProps> = ({
  htmlFor,
  label,
  value,
  formClass,
  labelClass,
  inputClass,
  placeholder,
  handleInput,
}) => {
  return (
    <div className={`form-group ${formClass ?? ''}`.trim()}>
      <label htmlFor={htmlFor} className={labelClass}>{label}</label>
      <Input
        id={htmlFor}
        value={value}
        classes={inputClass}
        placeholder={placeholder ?? ''}
        handleInput={handleInput}
      />
    </div>
  );
}
export default React.memo(FormGroup);