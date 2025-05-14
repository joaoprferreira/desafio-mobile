import React, {useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {FlatList, Text} from 'react-native';
import {TaskItem} from '../../Components/TaskItem';
import {Plus} from '../../assets/icons';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../redux/store/store';
import {fetchTasks} from '../../redux/slices/tasksSlice';
import {Task as TaskType} from '../../types/Task';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/routes';
import {useGetTasksQuery} from '../../services/api';

export const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  // const dispatch = useAppDispatch();
  const {data: items = [], error, isLoading, refetch} = useGetTasksQuery();

  console.log('Items::', items);

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const navigateToEdit = (item: TaskType) => {
    navigation.navigate('EditTask', item);
  };

  return (
    <Styled.PageContainer>
      {items?.tasks?.length > 0 ? (
        <FlatList
          data={items.tasks}
          renderItem={({item}) => (
            <TaskItem item={item} onEdit={item => navigateToEdit(item)} />
          )}
          refreshing={isLoading}
          keyExtractor={task => String(task.id)}
        />
      ) : (
        <Text style={{color: '#000'}}> No tasks found</Text>
      )}

      <Styled.StyledButton
        onPress={() => navigation.navigate('NewTask')}
        testID="add-button">
        <Plus width={35} height={35} />
      </Styled.StyledButton>
    </Styled.PageContainer>
  );
};
