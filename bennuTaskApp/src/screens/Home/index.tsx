import React, {useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {FlatList, Text} from 'react-native';
import {TaskItem} from '../../Components/TaskItem';
import {Plus} from '../../assets/icons';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../redux/store/store';
import {fetchTasks} from '../../redux/slices/tasksSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/routes';

export const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const dispatch = useAppDispatch();
  const {items, error, loading} = useAppSelector(state => state.tasks);

  console.log('Items::', items);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchTasks());
      console.log('oi eu sou a home');
      return () => {};
    }, [dispatch]),
  );

  const navigateToEdit = (item: undefined) => {
    navigation.navigate('EditTask', item);
  };

  return (
    <Styled.PageContainer>
      <FlatList
        data={items.tasks || []}
        renderItem={({item}) => (
          <TaskItem item={item} onEdit={item => navigateToEdit(item)} />
        )}
        refreshing={loading}
        keyExtractor={task => String(task.id)}
      />
      <Text style={{color: 'black'}}>oi eu sou a home</Text>

      <TaskItem
        id="2"
        title={'lavar louças'}
        description={'com sabaão em pó'}
        completed={false}
      />
      <Styled.StyledButton
        onPress={() => navigation.navigate('NewTask')}
        testID="add-button">
        <Plus width={35} height={35} />
      </Styled.StyledButton>
    </Styled.PageContainer>
  );
};
