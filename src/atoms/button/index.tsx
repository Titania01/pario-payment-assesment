import { ButtonProps } from "../../utils/types";
import { StyledButton } from "./Button";

const Button = ({
  title,
  width,
  isSecondary,
  onClick,
  type,
  mg,
  color,
}: ButtonProps) => {
  return (
    <StyledButton
      isSecondary={isSecondary}
      onClick={onClick}
      type={type ? type : "button"}
      mg={mg}
      color={color}
      width={width}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
