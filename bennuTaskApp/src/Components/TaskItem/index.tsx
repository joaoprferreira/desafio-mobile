import React from 'react';
// import {Check, Trash2, Edit} from 'react-native-feather';
import {useTheme} from 'styled-components';
import * as Styled from './styles';
import {Task} from '../../types/Task';
import Icons from '../../assets/icons';
import {Trash, Edit, Check} from '../../assets/icons';
// import {theme} from '../../styles/theme';

export const TaskItem: React.FC<Task> = ({
  id,
  title,
  description,
  completed,
  onToggle,
  onEdit,
  onDelete,
}) => {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.CheckButton completed={completed} onPress={() => {}}>
        {!completed && (
          <Check width={30} height={30} color={theme.colors.primary} />
        )}
      </Styled.CheckButton>

      <Styled.Content>
        <Styled.Title completed={completed}>{title}</Styled.Title>
        {description && (
          <Styled.Description completed={completed}>
            {description}
          </Styled.Description>
        )}
      </Styled.Content>

      <Styled.ActionContainer>
        <Styled.ActionButton onPress={() => {}}>
          <Edit width={20} height={20} color={theme.colors.primary} />
        </Styled.ActionButton>

        <Styled.ActionButton onPress={() => {}}>
          <Trash width={20} height={20} color={theme.colors.error} />
        </Styled.ActionButton>
      </Styled.ActionContainer>
    </Styled.Container>
  );
};
