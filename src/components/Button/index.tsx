import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title,  isDisabled, onClick }: IButtonProps) => {
  return <ButtonContainer disabled={isDisabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
