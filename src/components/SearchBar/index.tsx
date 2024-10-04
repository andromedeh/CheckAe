import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, SearchInput, IconContainer } from './styles';

interface SearcheBarProps {
  onChange: (text: string) => void;
}

export function SearchBar({ onChange }: SearcheBarProps) {
  return (
    <Container>
      <SearchInput
        placeholder='Procurar tarefa...'
        placeholderTextColor="gray"
        onChangeText={onChange}
      />
      <IconContainer>
        <Feather name="search" size={15} color="#1D1B20" />
      </IconContainer>
    </Container>
  );
}
