import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const StyledButton = styled(TouchableOpacity)<ContainerProps>`
  border: 1px solid
    ${({color, theme, disabled}) =>
      disabled ? theme.colors.gray : color || theme.colors.primary};
  padding: 10px;
  border-radius: 30px;
  margin-left: 10px;
`;
