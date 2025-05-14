import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../Components/Button';

export const PageContainer = styled(View)`
  flex: 1;
  padding: 60px 24px 80px;
`;

export const Input = styled(TextInput)`
  border: 1px solid ${({theme}) => theme.colors.primary};
  padding: 12px 20px;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.gray : theme.colors.primary};
  align-self: flex-end;
  padding: 10px 30px;
  border-radius: 30px;
  position: absolute;
  bottom: 60px;
  right: 35%;
`;

export const TitleButton = styled(Text)`
  color: ${({theme}) => theme.colors.surface};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
