import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, IconContainer } from './styles';
import { Feather } from '@expo/vector-icons';

type Props = {
  onPress: () => void; // Função a ser chamada ao pressionar o botão
};

export function AddTaskButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <IconContainer>
          <Feather name="plus" size={30} color="#111" />
        </IconContainer>
      </Container>
    </TouchableOpacity>
  );
}
