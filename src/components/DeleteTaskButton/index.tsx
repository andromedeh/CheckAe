import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, IconContainer } from './styles';

type Props = {
  onPress: () => void;
};

export function DeleteTaskButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <IconContainer>
          <Feather name="trash" size={30} color="#111" />
        </IconContainer>
      </Container>
    </TouchableOpacity>
  );
}
