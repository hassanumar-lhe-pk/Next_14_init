import React, { ChangeEvent } from "react";

interface TextInputProps {
  title?: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMsg: string;
}

const TextInput: React.FC<TextInputProps> = ({
  title,
  type,
  name,
  placeholder,
  value,
  handleOnChange,
  isError,
  errorMsg,
}) => {
  return (
    <div className="flex flex-col">
      {title && (
        <p className="text-secondary text-xs font-normal pb-1">{title}</p>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="rounded-md border-2 border-divider text-sm pl-3 h-9 w-full font-medium placeholder:font-normal"
        value={value}
        onChange={handleOnChange}
      />
      {isError && errorMsg && (
        <p className="text-red-500 text-xs font-medium">{errorMsg}</p>
      )}
    </div>
  );
};

export default TextInput;
