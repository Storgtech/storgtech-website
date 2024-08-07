import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer, ButtonVariant } from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: ButtonVariant
}
export function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
