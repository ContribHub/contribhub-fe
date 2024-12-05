import React from 'react';
import styled from 'styled-components';
import { buttonSizes } from '../../../styles/design-system/sizes';
import {
  ButtonProps,
  ButtonStyleProps,
} from '../../../types/components/Button';

const StyledButton = styled.button<ButtonStyleProps>`
  width: ${({ size = 'medium' }) => buttonSizes[size].width};
  height: ${({ size = 'medium' }) => buttonSizes[size].height};

  background-color: ${({ variant = 'black' }) =>
    variant === 'black' ? 'black' : 'white'};
  color: ${({ variant = 'black' }) =>
    variant === 'black' ? 'white' : 'black'};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  cursor: pointer;
`;

function Button({
  label,
  onClick,
  variant = 'black',
  size = 'medium',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size} {...rest}>
      {label}
    </StyledButton>
  );
}
export default Button;
