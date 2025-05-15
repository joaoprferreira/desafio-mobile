import React, {useEffect} from 'react';
import {Text, Animated} from 'react-native';
import * as Styled from './styles';
import {useRoute} from '@react-navigation/native';
import useNewTask from '../../hooks/useNewTask';
import {Task} from '../../types/Task';
import {useGetTasksQuery} from '../../services/api';
import {SkeletonPageContainer} from '../../Components/skeletonPageContainer';
import {useAnimation} from '../../hooks/useAnimation';

export const NewTask = () => {
  const route = useRoute();
  const params = (route.params ?? {}) as Partial<Task>;
  const {id} = params;
  const {data: items = {tasks: []}, error} = useGetTasksQuery();
  const {pulseAnim} = useAnimation();
  const task = Array.isArray(items) ? items.find(item => item.id === id) : null;

  const {
    handlerButtonConfirmation,
    currentTitle,
    currentDescription,
    setCurrentDescription,
    setCurrentTitle,
    isDisableButton,
  } = useNewTask({params});

  useEffect(() => {
    if (task) {
      setCurrentTitle(task.title);
      setCurrentDescription(task.description || '');
    }
  }, [task, setCurrentDescription, setCurrentTitle]);

  const isEditMode = Boolean(id);

  return (
    <SkeletonPageContainer
      pageTitle={isEditMode ? 'Editar tarefa' : 'Nova tarefa'}
      subtitle={
        isEditMode
          ? 'Por favor, preencha os campos abaixo para editar a tarefa selecionada. '
          : 'Insira as informações da nova tarefa nos campos abaixo.'
      }>
      <Styled.PageContainer>
        {error && (
          <Text>
            <>{error}</>
          </Text>
        )}

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

        <Styled.StyledButton
          onPress={handlerButtonConfirmation}
          disabled={isDisableButton}>
          <Animated.View
            style={{
              transform: [{scale: isDisableButton ? 1 : pulseAnim}],
            }}>
            <Styled.TitleButton>
              {id ? 'Salvar alterações' : 'Criar nova task'}
            </Styled.TitleButton>
          </Animated.View>
        </Styled.StyledButton>
      </Styled.PageContainer>
    </SkeletonPageContainer>
  );
};
