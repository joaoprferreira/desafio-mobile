import styled from 'styled-components';
import {Text, TouchableOpacity, View} from 'react-native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.colors.surface};
  border-radius: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const Content = styled(View)`
  flex: 1;
  margin-left: 12px;
`;

export const Title = styled(Text)<{completed: boolean}>`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme, completed}) =>
    completed ? theme.colors.disabled : theme.colors.text};
  text-decoration-line: ${({completed}) =>
    completed ? 'line-through' : 'none'};
`;

export const Description = styled(Text)<{completed: boolean}>`
  font-size: 14px;
  color: ${({theme, completed}) =>
    completed ? theme.colors.disabled : theme.colors.placeholder};
  margin-top: 4px;
`;

export const CheckButton = styled(TouchableOpacity)<{completed: boolean}>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  background-color: ${({theme, completed}) =>
    completed ? theme.colors.primary : 'transparent'};
`;

export const ActionContainer = styled(View)`
  flex-direction: row;
  margin-left: 12px;
`;

export const ActionButton = styled(TouchableOpacity)`
  padding: 8px;
  margin-left: 8px;
`;
