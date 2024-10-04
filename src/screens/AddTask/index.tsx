import React, { useContext, useState } from 'react';
import { Text, Alert, Pressable, Platform, StyleSheet } from 'react-native';
import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Header } from '@/src/components/Header';
import { AddTaskButton } from '@/src/components/AddTaskButton';
import { TaskContext } from '@/src/context/TaskContext';
import { TextValidation, ContainerInformacoes, DescriptionContainer, Container, InputContainer, TitleInput, Input, IconContainer, GoBackButton, TextGoBack } from "./styles";
import { Feather } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function AddTask({ route }: any) {

  const { tasks, createTask } = useContext(TaskContext);
  const [dateValue, setDateValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const TaskSchema = Yup.object().shape({
    nameValue: Yup.string()
      .min(4, "No mínimo 4 caracteres")
      .max(16, "No máximo 16 caracteres")
      .required("Tarefa não pode ser vazia"),
    descriptionValue: Yup.string()
      .min(10, "No mínimo 10 caracteres")
      .max(100, "No máximo 100 caracteres")
      .required("Descrição é obrigatória"),
  });

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

  const handleAddTask = (nameValue: string, descriptionValue: string) => {
    if (dateValue === "") {
      return Alert.alert("Insira uma data!");
    }
    if (tasks.some((task) => task.title === nameValue)) {
      return Alert.alert("Erro", "Tarefa já existe.");
    }
    createTask(nameValue, dateValue, descriptionValue);
    navigation.navigate('Home');
  };

  const navigation = useNavigation<PropsNavigate['navigation']>();

  return (
    <Container>
      <Formik
        initialValues={{ nameValue: '', descriptionValue: '' }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          handleAddTask(values.nameValue, values.descriptionValue);
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <ContainerInformacoes>
              <GoBackButton onPress={() => navigation.popToTop()}>
                <Feather name="arrow-left" size={24} color="black" />
                <TextGoBack> Voltar </TextGoBack>
              </GoBackButton>
              <Header title='Adicionar Tarefa' />
              <TitleInput>Nome da tarefa:</TitleInput>
              <InputContainer>
                <Input
                  placeholder='Digite o nome...'
                  placeholderTextColor="gray"
                  onChangeText={handleChange('nameValue')}
                  value={values.nameValue}
                  onBlur={() => console.log('Input perdeu o foco')}
                />
              </InputContainer>
              {touched.nameValue && errors.nameValue && (
                <TextValidation >{errors.nameValue}</TextValidation>
              )}
              <TitleInput>Data:</TitleInput>
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
              </InputContainer>

              <TitleInput>Descrição:</TitleInput>
              <DescriptionContainer>
                <Input
                  value={values.descriptionValue}
                  onChangeText={handleChange('descriptionValue')}
                  placeholder='Dê uma descrição...'
                  placeholderTextColor="gray"
                  multiline={true}
                />
              </DescriptionContainer>
              {touched.descriptionValue && errors.descriptionValue && (
                <TextValidation>{errors.descriptionValue}</TextValidation>
              )}
            </ContainerInformacoes>
            <AddTaskButton onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
}
