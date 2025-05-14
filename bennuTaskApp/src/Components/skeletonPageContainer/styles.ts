import {Text, View} from 'react-native';
import styled from 'styled-components';

export const SkeletonContainer = styled(View)`
  flex: 1;
  padding: 60px 24px 80px;
  display: flex;
  justify-content: center;
`;
export const TitleSkeleton = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
`;

export const SubtitleSkeleton = styled(Text)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
  margin: 20px auto;
`;
