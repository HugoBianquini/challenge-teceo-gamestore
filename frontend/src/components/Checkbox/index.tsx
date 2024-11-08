import { ICheckboxProps } from "./index.type";
import { Input } from "./styles";

const Checkbox = ({ checked, onChange }: ICheckboxProps) => {
  return <Input type="checkbox" onChange={onChange} checked={checked} />;
};

export default Checkbox;
