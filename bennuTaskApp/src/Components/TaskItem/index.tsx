import React, {useEffect} from 'react';
// import {Check, Trash2, Edit} from 'react-native-feather';
import {useTheme} from 'styled-components';
import * as Styled from './styles';
import {Task} from '../../types/Task';
import Icons from '../../assets/icons';
import {Trash, Edit, Check} from '../../assets/icons';
import {useTask} from '../../hooks/useTask';
import {ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../redux/store/store';

interface TaskItemProps {
  item?: Task;
  onDelete?: () => void;
  onEdit?: () => void;
  onToggle?: () => void;
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
  const {loading} = useTask();
  if (!item) {
    return <ActivityIndicator animating={loading} />;
  }

  return (
    <Styled.Container>
      {loading ? (
        <ActivityIndicator
          color={theme.colors.primaryDark}
          animating={loading}
        />
      ) : (
        <>
          <Styled.CheckButton completed={item?.completed} onPress={() => {}}>
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

            <Styled.ActionButton onPress={() => {}}>
              <Trash width={20} height={20} color={theme.colors.error} />
            </Styled.ActionButton>
          </Styled.ActionContainer>
        </>
      )}
    </Styled.Container>
  );
};
