import React, {useEffect} from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';
import {useAppSelector} from '../../redux/store/store';
import {useRoute} from '@react-navigation/native';
import useNewTask from '../../hooks/useNewTask';
import {Task} from '../../types/Task';
import {useGetTasksQuery} from '../../services/api';

export const NewTask = () => {
  const route = useRoute();
  // const {error} = useAppSelector(state => state.tasks);
  const params = (route.params ?? {}) as Partial<Task>;
  const {id} = params;
  const {data: items = [], isLoading, error} = useGetTasksQuery();

  const task = Array.isArray(items) ? items.find(item => item.id === id) : null;

  const {
    handlerButtonConfirmation,
    currentTitle,
    currentDescription,
    setCurrentDescription,
    setCurrentTitle,
  } = useNewTask({params});

  useEffect(() => {
    if (task) {
      setCurrentTitle(task.title);
      setCurrentDescription(task.description || '');
    }
  }, [task, setCurrentDescription, setCurrentTitle]);

  return (
    <Styled.PageContainer>
      <Text>OI Aqui você cria uma nova task</Text>
      {error && <Text>{error}</Text>}

      <Styled.Input
        testID="title"
        placeholder="Título"
        value={currentTitle}
        onChangeText={setCurrentTitle}
      />
      <Styled.Input
        testID="description"
        placeholder="Descrição"
        value={currentDescription}
        onChangeText={setCurrentDescription}
      />
      <Styled.StyledButton onPress={handlerButtonConfirmation}>
        <Text>{id ? 'Salvar alterações' : 'Criar nova task'}</Text>
      </Styled.StyledButton>
    </Styled.PageContainer>
  );
};
