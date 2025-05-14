import React from 'react';
import {useTheme} from 'styled-components';
import * as Styled from './styles';
import {Task} from '../../types/Task';
import {Trash, Edit, Check} from '../../assets/icons';
import {ActivityIndicator} from 'react-native';
import useNewTask from '../../hooks/useNewTask';
import {useGetTasksQuery} from '../../services/api';

interface TaskItemProps {
  item?: Task;
  onDelete?: () => void;
  onEdit?: (item: Task) => void;
  onToggle?: (item: string) => void;
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
  const {data: items = [], isLoading} = useGetTasksQuery();
  const {handleDeleteTask} = useNewTask({params: item});
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
            onPress={() => onToggle?.(item)}>
            {item?.completed && (
              <Check width={30} height={30} color={theme.colors.primary} />
            )}
          </Styled.CheckButton>

          <Styled.Content>
            <Styled.Title completed={item.completed}>
              {String(item?.title) || ''}
            </Styled.Title>
            {item?.description && (
              <Styled.Description completed={item?.completed}>
                {item?.description}
              </Styled.Description>
            )}
          </Styled.Content>

          <Styled.ActionContainer>
            <Styled.ActionButton onPress={() => onEdit?.(item)}>
              <Edit width={20} height={20} color={theme.colors.primary} />
            </Styled.ActionButton>

            <Styled.ActionButton onPress={() => handleDeleteTask(item?.id)}>
              <Trash width={20} height={20} color={theme.colors.error} />
            </Styled.ActionButton>
          </Styled.ActionContainer>
        </>
      )}
    </Styled.Container>
  );
};
