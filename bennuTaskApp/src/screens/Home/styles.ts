import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../Components/Button';

export const TitleComponent = styled(Text)``;

export const PageContainer = styled(View)`
  flex: 1;
`;

export const StyledButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.primary};
  box-shadow: 1px 1px 10px ${({theme}) => theme.colors.primaryDark};
  position: absolute;
  bottom: 60px;
  right: 43%;
`;
