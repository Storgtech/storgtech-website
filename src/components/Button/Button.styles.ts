import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

const BTN_COLORS = {
  primary: 'green-500',
  secondary: 'blue-700',
} as const

interface ButtonContainerProps {
  variant: keyof typeof BTN_COLORS
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  padding: 0.625rem 1rem;

  border: 0;
  border-radius: 0.25rem;

  background-color: ${(props) => props.theme[BTN_COLORS[props.variant]]};
  color: ${(props) => props.theme['white-default']};
`
