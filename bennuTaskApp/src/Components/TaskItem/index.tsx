import React from 'react';
import {useTheme} from 'styled-components';
import * as Styled from './styles';
import {Task} from '../../types/Task';
import {Trash, Edit, Check} from '../../assets/icons';
import {ActivityIndicator} from 'react-native';
import {useDeleteTaskMutation, useGetTasksQuery} from '../../services/api';

interface TaskItemProps {
  item?: Task;
  onDelete?: (item: Task) => void;
  onEdit?: (item: Task) => void;
  onToggle?: (item: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  item = {
    id: '',
    title: '',
    description: '',
    completed: false,
    createdAt: '',
  },
  onDelete,
  onEdit,
  onToggle,
}) => {
  const theme = useTheme();
  const {isLoading} = useGetTasksQuery();
  const [, {isLoading: isDeleting}] = useDeleteTaskMutation();
  const [checked, setChecked] = React.useState(item.completed);

  if (!item) {
    return <ActivityIndicator animating={isLoading} />;
  }

  return (
    <Styled.Container>
      {isLoading ? (
        <ActivityIndicator
          color={theme.colors.primaryDark}
          animating={isLoading}
        />
      ) : (
        <>
          <Styled.CheckButton
            completed={item?.completed}
            onPress={() => {
              setChecked(true);
              setTimeout(() => {
                onToggle?.(item);
              }, 1500);
            }}>
            {(item?.completed || checked) && (
              <Check width={30} height={30} color={theme.colors.primary} />
            )}
          </Styled.CheckButton>

          <Styled.Content>
            <Styled.Title completed={item.completed || checked}>
              {String(item?.title) || ''}
            </Styled.Title>
            {item?.description && (
              <Styled.Description completed={item?.completed || checked}>
                {item?.description}
              </Styled.Description>
            )}
          </Styled.Content>

          <Styled.ActionContainer>
            <Styled.ActionButton onPress={() => onEdit?.(item)}>
              <Edit width={20} height={20} color={theme.colors.primary} />
            </Styled.ActionButton>

            <Styled.ActionButton onPress={() => onDelete?.(item)}>
              {isDeleting ? (
                <ActivityIndicator size="large" color={theme.colors.primary} />
              ) : (
                <Trash width={20} height={20} color={theme.colors.error} />
              )}
            </Styled.ActionButton>
          </Styled.ActionContainer>
        </>
      )}
    </Styled.Container>
  );
};
