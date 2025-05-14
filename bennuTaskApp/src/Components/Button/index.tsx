import React, {ReactElement} from 'react';
import {StyledButton} from './styles';

interface ButtonProps {
  children: ReactElement;
  color?: string;
  disabled?: boolean;
  onPress: () => void;
  testID?: string;
}

const Button = ({
  children,
  color,
  onPress,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      color={color}
      onPress={onPress}
      disabled={disabled || false}
      {...props}>
      {children}
    </StyledButton>
  );
};

export {Button};
