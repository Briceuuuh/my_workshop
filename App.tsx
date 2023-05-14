import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screen1 /*, Login */ } from './workshop_1';
import { Calculatrice } from './workshop_2';
import { Login } from './workshop_3';

function color() {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = {
    background: isDarkMode ? 'black' : 'white',
    text: isDarkMode ? 'green' : 'cyan',
    input: isDarkMode ? 'black' : 'grey',
    button: isDarkMode ? 'blue' : 'red',
    hello: isDarkMode ? 'brown' : 'purple',
  };
  return colors;
}

const Tab = createBottomTabNavigator();

const App = () => {
  const colors = color();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Login'
          screenOptions={({}) => ({
            headerShown: false,
            tabBarActiveTintColor: 'lightblue',
            tabBarInactiveTintColor: 'black',
          })}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Mes cartes" component={Screen1} />
          <Tab.Screen name="Calculatrice" component={Calculatrice} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
