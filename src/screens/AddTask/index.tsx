import React, { useContext, useState } from 'react';
import { Alert, Pressable, Platform, StyleSheet } from 'react-native';
import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Header } from '@/src/components/Header';
import { AddTaskButton } from '@/src/components/AddTaskButton';
import { TaskContext } from '@/src/context/TaskContext';
import { ContainerInformacoes, DescriptionContainer, Container, InputContainer, TitleInput, Input, IconContainer, GoBackButton, TextGoBack } from "./styles";
import { Feather } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;
type Props = {
  nameOnChangeText: (text: string) => void;
  nameValue: string;
  dateOnChangeText: (text: string) => void;
  dateValue: string;
  descriptionOnChangeText: (text: string) => void;
  descriptionValue: string;
}

export default function AddTask({ route }: any) {

  const { tasks, createTask, setTasks } = useContext(TaskContext);
  const [nameValue, setNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }: any, selectedDate: any) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setDateValue(formatDate(currentDate));
      }
    } else {
      toggleDatepicker();
    }
  };
  const formatDate = (rawDate: any) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  function AddTask() {
    if (nameValue == "") {
      return Alert.alert("Tarefa sem nome!");
    }
    if (dateValue == "") {
      return Alert.alert("Insira uma data!");
    }
    if (descriptionValue == "") {
      return Alert.alert("Dê uma descrição!");
    }
    if (tasks.some((task) => task.title === nameValue)) {
      return Alert.alert("Erro", "Tarefa já existe.")
    }
    createTask(nameValue, dateValue, descriptionValue);
    navigation.navigate('Home');

  }

  const navigation = useNavigation<PropsNavigate['navigation']>();
  return (

    <Container>
      <ContainerInformacoes>
        <GoBackButton onPress={() => navigation.popToTop()}>
          <Feather name="arrow-left" size={24} color="black" />
          <TextGoBack> Voltar </TextGoBack>
        </GoBackButton>
        <Header title='Adicionar Tarefa' />
        <TitleInput> Nome da tarefa:</TitleInput>
        <InputContainer>
          <Input
            value={nameValue}
            onChangeText={setNameValue}
            placeholder='Digite o nome...'
            placeholderTextColor="gray" />
        </InputContainer>
        <TitleInput> Data:</TitleInput>
        <InputContainer>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display='spinner'
              value={date}
              onChange={onChange}
            />
          )}
          {!showPicker && (
            <Pressable onPress={toggleDatepicker}>
              <Input
                value={dateValue}
                placeholder='Escolha a data...'
                placeholderTextColor="gray"
                editable={false}
                onPressIn={toggleDatepicker}
              />
            </Pressable>
          )}
          {/*<IconContainer>
            <Feather name="calendar" size={15} color="#1D1B20" />
          </IconContainer>*/}
        </InputContainer>
        <TitleInput> Descrição:</TitleInput>
        <DescriptionContainer>
          <Input
            value={descriptionValue}
            onChangeText={setDescriptionValue}
            placeholder='Dê uma descrição...'
            placeholderTextColor="gray" />
        </DescriptionContainer>
      </ContainerInformacoes>
      <AddTaskButton onPress={() => AddTask()} />
    </Container>
  );
};
