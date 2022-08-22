import styled from "styled-components";
import { InputProps } from "../../utils/types";

export const InputWrapper = styled.div<InputProps>`
  width: ${({ width }) => width || "100%"};
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  label {
    font-size: 1.25rem;
    color: #000;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;

    sup {
      color: ${({ theme }) => theme.colors.red};
      font-weight: 400;
      font-size: 1.25rem;
      margin-left: 0.5rem;
    }
  }

  .input-wrapper {
    border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    border-radius: 0.625rem;
    margin-top: 1rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    padding: 1.06rem 1.68rem;

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.gray};
      background: transparent;

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;