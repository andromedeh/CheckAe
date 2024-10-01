import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Alert, StatusBar } from 'react-native';
import { Task } from '../../components/Task'
import { Filter } from '../../components/Filter'
import { SearchBar } from '../../components/SearchBar'
import { AddTaskButton } from '../../components/AddTaskButton'
import { Feather } from '@expo/vector-icons';


export default function Home() {

  const handleAddTask = () => {
    // Navegar para a tela de adicionar nova tarefa
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarefa 1', check: true },
    { id: 2, title: 'Tarefa 2', check: false },
    { id: 3, title: 'Tarefa 3', check: true },
    { id: 4, title: 'Tarefa 4', check: false },
    { id: 5, title: 'Tarefa 5', check: true },
    { id: 6, title: 'Tarefa 6', check: false },
    { id: 7, title: 'Tarefa 7', check: true },
    { id: 8, title: 'Tarefa 8', check: false },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'check') return task.check;
    if (filter === 'open') return !task.check;
    return true;
  });

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <SearchBar />
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
        renderItem={({ item }) => (
          <Task
            title={item.title}
            check={item.check}
          // Você pode passar outros props se necessário
          />
        )}
        keyExtractor={item => item.id.toString()}
        style={styles.tasks}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 48, paddingHorizontal: 24 }}>
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
        )}
      />

      <AddTaskButton onPress={handleAddTask} />
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
    paddingTop: 64,
    gap: 1,
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
  }
});