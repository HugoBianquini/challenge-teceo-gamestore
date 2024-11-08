import { IButtonProps } from "./index.type";
import { CustomButton } from "./styles";

const Button = ({ children, variant = "regular", ...props }: IButtonProps) => {
  return (
    <CustomButton variant={variant} {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;
