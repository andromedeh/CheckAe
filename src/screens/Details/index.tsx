import { Feather } from '@expo/vector-icons'
import { RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Header } from '@/src/components/Header';
import { TextStatus, ContainerInformacoes, Container, ContainerStatus, GoBackButton, TextGoBack, DetailContainer, Text, TaskCheck, DescriptionContainer, TitleContainer } from './styles';
import { DeleteTaskButton } from '@/src/components/DeleteTaskButton';
import { Alert } from 'react-native';
import { TaskProps } from '@/src/utils/types';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details({ route }: any, props: TaskProps) {

  const { task } = useContext(TaskContext);
  const navigation = useNavigation<Props['navigation']>();
  const { tasks, setTasks } = useContext(TaskContext);

  function delTask(taskToDelete: TaskProps) {
    Alert.alert("Atenção!", `Tem certeza que deseja remover a tarefa ${taskToDelete.title} ?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.title != taskToDelete.title);
            setTasks(updatedTasks);
            navigation.navigate('Home');

          }
        },
        { text: "Cancelar", style: "cancel" }
      ]
    )
  }
  return (
    <Container>
      <ContainerInformacoes>
        <GoBackButton onPress={() => navigation.popToTop()}>
          <Feather name="arrow-left" size={24} color="black" />
          <TextGoBack> Voltar </TextGoBack>
        </GoBackButton>
        <Header title='Detalhes da tarefa' />
        <TitleContainer>Status:</TitleContainer>
        <DetailContainer>
          <ContainerStatus checked={task.status}>
            <TaskCheck checked={task.status}>
              <Feather
                name={task.status ? 'check-circle' : 'circle'}
                size={20}
                color={'#101010'}
              />
            </TaskCheck>
          </ContainerStatus>
          <TextStatus>
            {task.status ? 'Tarefa concluída!' : 'Tarefa pendente!'}
          </TextStatus>
        </DetailContainer>
        <TitleContainer>Nome:</TitleContainer>
        <DetailContainer>
          <Text>
            {task.title}
          </Text>
        </DetailContainer>
        <TitleContainer>Data:</TitleContainer>
        <DetailContainer>
          <Text>
            <Text>
              {task.date}
            </Text>
          </Text>
        </DetailContainer>
        <TitleContainer>Descrição:</TitleContainer>
        <DescriptionContainer>
          <Text>
            {task.description}
          </Text>
        </DescriptionContainer>
      </ContainerInformacoes>
      <DeleteTaskButton onPress={() => delTask(task)} />
    </Container>
  );
}