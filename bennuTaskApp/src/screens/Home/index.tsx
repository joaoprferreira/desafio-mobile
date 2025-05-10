import React from 'react';
import {Text} from 'react-native';
import {TaskItem} from '../../Components/TaskItem';
import {Plus} from '../../assets/icons';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <Styled.PageContainer>
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
