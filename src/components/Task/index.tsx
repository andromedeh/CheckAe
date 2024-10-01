import { useState } from 'react';
import { Container, ContainerTask, ContainerDelete, TaskCheck, TaskDelete, TaskText, ContainerTaskText } from './styles'
import { Feather } from '@expo/vector-icons'

interface TaskProps {
  title: string;
  check: boolean;
}

export function Task({ title, check }: TaskProps) {
  const [checked, setChecked] = useState(check);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <ContainerTask checked={checked}>
        <TaskCheck onPress={handlePress} checked={checked}>
          <Feather
            name={checked ? 'check-circle' : 'circle'}
            size={20}
            color={'#101010'}
          />
        </TaskCheck>
      </ContainerTask>
      <ContainerTaskText>
        <TaskText style={{ textDecorationLine: checked ? 'line-through' : 'none' }}>
          {title} {/* Usar o título da tarefa recebido como prop */}
        </TaskText>
      </ContainerTaskText>
      <ContainerDelete>
        <TaskDelete>
          <Feather name="x-circle" size={20} color="#101010" />
        </TaskDelete>
      </ContainerDelete>
    </Container>
  );
}