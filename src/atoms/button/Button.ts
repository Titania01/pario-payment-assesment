import styled from "styled-components";
import { ButtonProps } from "../../utils/types";

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ isSecondary, theme }) =>
    isSecondary ? theme.colors.white : theme.colors.btnGradient};
  border-radius: 0.625rem;
  border: none;
  width: ${({width}) => width ?? "14.875rem"};
  height: 3.625rem;
  outline: none;
  color: ${({ color, theme }) =>
    theme.colors[color as string] ?? theme.colors.secondary};
  font-size: 1.25rem;
  font-weight: 700;
  margin: ${({ mg }) => mg};

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    cursor: pointer;
  }
`;