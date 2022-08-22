import {DetailedHTMLProps} from 'react'
export interface ButtonProps {
    title?: string;
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
    isSecondary?: boolean;
    mg?: string;
    color?: string;
    width?: string;
  }
  
  export type InputProps = {
    name?: string;
    title?: string;
    required?: boolean;
    description?: string;
    width?: string;
    value?: string;
    placeholder?: string;
    show?: boolean;
  } & DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  
  export interface TextProps {
    h1?: boolean;
    h4?: boolean;
    hoverColor?: string;
    color?: string;
    pd?: string;
    bold?: boolean;
    mg?: string;
  }