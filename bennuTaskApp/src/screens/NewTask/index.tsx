import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';
import {useAppDispatch, useAppSelector} from '../../redux/store/store';
import {addTask} from '../../redux/slices/tasksSlice';
import {useRoute} from '@react-navigation/native';

export const NewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();
  const route = useRoute();
  const {loading, error} = useAppSelector(state => state.tasks);
  const params = route.params;
  const {id, title: tilteTask, description: descriptionTask} = params;
  const items = useAppSelector(state => state.tasks.items) ?? [];
  const task = Array.isArray(items) ? items.find(item => item.id === id) : null;

  console.log('Items::', items);
  console.log('Isso é oque está chegando através de params:', params);
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
    }
  }, [task]);

  console.log('Task::', task);
  console.log('ID::', id);

  console.log('Loading::', loading);
  console.log('Error::', error);
  console.log('Title::', title);

  const handleSubmit = async () => {
    if (!title.trim()) {
      console.log('O título é obrigatório');
      return;
    }
    console.log('Entrei aqui');

    try {
      const resultAction = await dispatch(
        addTask({
          title: title,
          description: description,
          completed: false,
        }),
      );
      console.log('resultActions::', resultAction);

      if (addTask.fulfilled.match(resultAction)) {
        setTitle('');
        setDescription('');
        console.log('Tarefa criada com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      console.log('Erro ao criar tarefa');
    }
  };
  return (
    <Styled.PageContainer>
      <Text>OI Aqui você cria uma nova task</Text>
      {error && <Text>{error}</Text>}

      <Styled.Input
        testID="title"
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <Styled.Input
        testID="description"
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <Styled.StyledButton onPress={handleSubmit}>
        <Text>Criar nova task</Text>
      </Styled.StyledButton>
    </Styled.PageContainer>
  );
};
