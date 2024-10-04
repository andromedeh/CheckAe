import { Container, ContainerTask, ContainerDelete, TaskCheck, TaskDelete, TaskText, ContainerTaskText } from './styles'
import { Feather } from '@expo/vector-icons'
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from "../../context/TaskContext";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TaskProps, RootStackParamList } from '../../utils/types'

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task(props: TaskProps) {

  const navigation = useNavigation<Props['navigation']>();
  const { selectTask } = useContext(TaskContext);

  function handlePress() {
    navigation.navigate('Details');
    selectTask(props);
  }

  return (
    <Container>
      <ContainerTask checked={props.status}>
        <TaskCheck onPress={props.onCheck} checked={props.status}>
          <Feather
            name={props.status ? 'check-circle' : 'circle'}
            size={20}
            color={'#101010'}
          />
        </TaskCheck>
      </ContainerTask>
      <ContainerTaskText onPress={() => handlePress()}>
        <TaskText style={{ textDecorationLine: props.status ? 'line-through' : 'none' }}>
          {props.title}
        </TaskText>
      </ContainerTaskText>
      <ContainerDelete>
        <TaskDelete onPress={props.onRemove}>
          <Feather name="x-circle" size={20} color="#101010" />
        </TaskDelete>
      </ContainerDelete>
    </Container>
  );
}