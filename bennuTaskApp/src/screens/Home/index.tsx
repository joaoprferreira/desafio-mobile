import React, {useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Animated, FlatList} from 'react-native';
import {TaskItem} from '../../Components/TaskItem';
import {Plus} from '../../assets/icons';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {Task, Task as TaskType} from '../../types/Task';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/routes';
import {useGetTasksQuery} from '../../services/api';
import {SkeletonPageContainer} from '../../Components/skeletonPageContainer';
import {useAnimation} from '../../hooks/useAnimation';
import useNewTask from '../../hooks/useNewTask';
import ConfettiCannon from 'react-native-confetti-cannon';

export const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const {data: items = {tasks: []}, isLoading, refetch} = useGetTasksQuery();
  const {pulseAnim} = useAnimation();
  const {handleCheckTask, handleDeleteTask} = useNewTask({
    refetch,
  });
  const confettiRef = useRef<any>(null);

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const handleCheckTaskWithConfetti = async (task: Task) => {
    await handleCheckTask(task);
    if (!task.completed) {
      confettiRef.current?.start();
    }
  };

  const navigateToEdit = (item: TaskType) => {
    navigation.navigate('EditTask', item);
  };

  return (
    <SkeletonPageContainer
      pageTitle={`${Number(
        items.tasks.filter(task => !task.completed)?.length,
      )} tarefas ativas`}
      subtitle="Organize seu dia com facilidade">
      {items.tasks && items.tasks.filter(t => !t.completed).length > 0 ? (
        <FlatList
          data={items.tasks.filter(task => !task.completed)}
          renderItem={({item}) => (
            <TaskItem
              item={item}
              onEdit={itemEdit => navigateToEdit(itemEdit)}
              onToggle={() => handleCheckTaskWithConfetti(item)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          refreshing={isLoading}
          keyExtractor={task => String(task.id)}
        />
      ) : (
        <Styled.SkeletonContainer>
          <Styled.TitleSkeleton>
            Você ainda não tem nenhuma tarefa
          </Styled.TitleSkeleton>
        </Styled.SkeletonContainer>
      )}
      <Animated.View
        style={{
          transform: [{scale: pulseAnim}],
        }}>
        <Styled.StyledButton
          onPress={() => navigation.navigate('NewTask')}
          testID="add-button">
          <Styled.ContainerButton>
            <Plus width={20} height={20} />
            <Styled.StyledButtonText>Adicionar</Styled.StyledButtonText>
          </Styled.ContainerButton>
        </Styled.StyledButton>
      </Animated.View>
      <ConfettiCannon
        ref={confettiRef}
        count={80}
        origin={{x: 200, y: 0}}
        fadeOut
        autoStart={false}
      />
    </SkeletonPageContainer>
  );
};
