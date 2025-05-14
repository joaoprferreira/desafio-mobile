import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Styled from './styles';

interface SkeletonPageContaienrProps {
  children?: React.ReactNode;
  pageTitle?: string;
  subtitle?: string;
  isLoading?: boolean;
}

export const SkeletonPageContainer = ({
  children,
  pageTitle,
  subtitle,
  isLoading = false,
}: SkeletonPageContaienrProps) => {
  return (
    <Styled.SkeletonContainer>
      {pageTitle && <Styled.TitleSkeleton>{pageTitle}</Styled.TitleSkeleton>}
      {subtitle && (
        <Styled.SubtitleSkeleton>{subtitle}</Styled.SubtitleSkeleton>
      )}
      {children}
    </Styled.SkeletonContainer>
  );
};
