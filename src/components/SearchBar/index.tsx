import React from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, SearchInput, IconContainer } from './styles';

export function SearchBar() {
  return (
    <Container>
      <SearchInput
        placeholder='Digite a tarefa'
        placeholderTextColor="white"
      />
      <IconContainer>
        <Feather name="search" size={15} color="#1D1B20" />
      </IconContainer>
    </Container>
  );
}
