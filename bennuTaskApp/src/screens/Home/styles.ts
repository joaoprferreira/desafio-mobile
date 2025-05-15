import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Button} from '../../Components/Button';

export const TitleComponent = styled(Text)``;

export const PageContainer = styled(View)`
  flex: 1;
  padding: 60px 24px 80px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.primaryLight};
  elevation: 5;
  position: absolute;
  bottom: 10px;
  right: 22%;
  width: 200px;
  border: none;
`;

export const StyledButtonText = styled(Text)`
  color: ${({theme}) => theme.colors.backdrop};
  font-size: 16px;
  font-weight: bold;
`;

export const ContainerButton = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const SkeletonContainer = styled(View)`
  flex: 1;
  padding: 60px 24px 80px;
  display: flex;
  justify-content: center;
`;

export const TitleSkeleton = styled(Text)`
  font-size: ${({theme}) => theme.textVariants.header.fontSize}px;
  font-weight: ${({theme}) => theme.textVariants.header.fontWeight};
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
`;
