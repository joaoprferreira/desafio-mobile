import React from 'react';
import {Text, View} from 'react-native';
import * as Styled from './styles';

export const NewTask = () => {
  return (
    <Styled.PageContainer>
      <Text>OI Aqui você cria uma nova task</Text>
      <Styled.Input
        testID="title"
        placeholder="Título"
        value={''}
        onChangeText={() => {}}
      />
      <Styled.Input
        testID="description"
        placeholder="Descrição"
        value={''}
        onChangeText={() => {}}
      />
      <Styled.StyledButton onPress={() => {}}>
        <Text>Criar nova task</Text>
      </Styled.StyledButton>
    </Styled.PageContainer>
  );
};
