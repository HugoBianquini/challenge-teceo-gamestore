import { IInputProps } from "./index.type";
import { CustomInput } from "./styles";

const Input = ({ placeholder, value, onChange }: IInputProps) => {
  return (
    <CustomInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
