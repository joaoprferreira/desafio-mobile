import React from 'react';
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
