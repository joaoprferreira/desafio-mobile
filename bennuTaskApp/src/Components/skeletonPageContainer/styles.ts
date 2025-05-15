import {Text, View} from 'react-native';
import styled from 'styled-components';

export const SkeletonContainer = styled(View)`
  flex: 1;
  padding: 60px 24px 80px;
  display: flex;
  justify-content: center;
`;
export const TitleSkeleton = styled(Text)`
  font-size: ${({theme}) => theme.textVariants.header.fontSize}px;
  font-weight: ${({theme}) => theme.textVariants.header.fontWeight};
  color: ${({theme}) => theme.colors.primaryDark};
  text-align: center;
`;

export const SubtitleSkeleton = styled(Text)`
  font-size: ${({theme}) => theme.textVariants.body.fontSize}px;
  color: ${({theme}) => theme.colors.primaryDark};
  text-align: center;
  margin: 20px auto;
`;
