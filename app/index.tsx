import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import AddTask from '../src/screens/AddTask';
import TaskProvider from '@/src/context/TaskContext';
import Details from '@/src/screens/Details';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TaskProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
