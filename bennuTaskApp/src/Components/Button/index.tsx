import React, {ReactElement} from 'react';
import {StyledButton} from './styles';

interface ButtonProps {
  children: ReactElement;
  color?: string;
  onPress: () => void;
  testID?: string;
}

const Button = ({children, color, onPress, ...props}: ButtonProps) => {
  return (
    <StyledButton color={color} onPress={onPress} {...props}>
      {children}
    </StyledButton>
  );
};

export {Button};
