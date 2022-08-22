import styled from "styled-components";
import { InputProps } from "../../utils/types";
import { InputWrapper } from "../input/Input";

export const SelectContainer = styled(InputWrapper)<InputProps>`
.input-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4f4f4f;


  position: relative;
  width: 100%;

  .select {
    position: absolute;
    width: 85%;
    top: 1px;
    left: 2px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.white};
    display: ${({ show }) => (show ? "block" : "none")};
  }
}
`;
