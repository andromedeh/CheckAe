import { useContext, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Alert, StatusBar, Image } from 'react-native';
import { Header } from '@/src/components/Header';
import { Task } from '../../components/Task'
import { Filter } from '../../components/Filter'
import { SearchBar } from '../../components/SearchBar'
import { AddTaskButton } from '../../components/AddTaskButton'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { TaskContext } from '@/src/context/TaskContext';
import { TaskProps } from '@/src/utils/types';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home() {
  const navigation = useNavigation<Props['navigation']>();
  const { tasks, setTasks } = useContext(TaskContext);

  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('all');

  function handleAddTask() {
    navigation.navigate('AddTask');
  }

  function handleTaskChangeStatus(taskToChange: TaskProps) {
    const updatedTasks = tasks.filter((task) => task.title !== taskToChange.title);
    const newTask = {
      id: taskToChange.id,
      title: taskToChange.title,
      date: taskToChange.date,
      description: taskToChange.description,
      status: !taskToChange.status,
    }
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
  }

  function handleTaskDelete(taskToDelete: TaskProps) {
    Alert.alert("Atenção!", `Tem certeza que deseja remover a tarefa ${taskToDelete.title} ?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.title != taskToDelete.title);
            setTasks(updatedTasks);
          }
        },
        { text: "Cancelar", style: "cancel" }
      ]
    )
  }

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'check' && task.status) || (filter === 'open' && !task.status);
    return matchesSearch && matchesFilter;
  });

  const hasNoTasks = filteredTasks.length === 0 && tasks.length > 0;

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View>
        <Image
          source={require('../../assets/images/header.png')}
          style={styles.image}
        />
      </View>
      <Header title="">
      </Header>
      <SearchBar onChange={setSearchText} />
      <View style={styles.filtersContainer}>
        <Filter
          title="Todas"
          selected={filter === 'all'}
          color="#17B9CF"
          onPress={() => setFilter('all')}
        />
        <Filter
          title="Concluídas"
          selected={filter === 'check'}
          color="#5CC867"
          onPress={() => setFilter('check')}
        />
        <Filter
          title="Pendentes"
          selected={filter === 'open'}
          color="#EFC250"
          onPress={() => setFilter('open')}
        />
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
            status={item.status}
            onCheck={() => handleTaskChangeStatus(item)}
            onRemove={() => handleTaskDelete(item)}
          />
        )}
        style={styles.tasks}
        ListEmptyComponent={() => (
          !hasNoTasks ? (
            <View style={{ alignItems: 'center', marginTop: 30, paddingHorizontal: 24 }}>
              <Feather name="clipboard" size={56} color="#17B9CF" />
              <Text style={{
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 24,
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
              }}>
                Nenhuma tarefa cadastrada!
              </Text>
              <Text style={{
                color: '#000',
                textShadowColor: '#000',
                fontSize: 16,
                marginTop: 12,
                textAlign: 'center',
                lineHeight: 24,
              }}>
                Crie uma nova tarefa para começar a organizar seu dia e alcançar suas metas!
              </Text>
            </View>
          ) : null
        )}
      />
      <AddTaskButton onPress={() => handleAddTask()} />
    </View>

  );
}

const CustomStatusBar = () => {
  return (
    <StatusBar
      backgroundColor="#9ACFD7"
      barStyle="default"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ACFD7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 32,
    gap: 1,
    paddingBottom: 50,
  },

  filtersContainer: {
    flexDirection: 'row',
    gap: 0,
    padding: 20,
    paddingTop: 0,
  },

  tasks: {
    flexDirection: 'column',
    width: '100%',
  },

  image: {
    resizeMode: 'cover',
    marginBottom: -40,
  },
});