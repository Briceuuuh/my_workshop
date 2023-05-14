import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screen1 /*, Login */ } from './workshop_1';
import { Calculatrice } from './workshop_2';
import { Login } from './workshop_3';

const Tab = createBottomTabNavigator();


//Workshop_1 2h
// Créer un component App avec les différent future écran
// Utiliser navigation container pour ajouter le BottomTab()
// Créer un component button, header
// Créer différent écran pour les ajouter dans les tab.screen : Login avec textedit, button, Calculatrice, Screen1
// Créer un stylesheet pour faciliter la gestion du style de chacun des component

//--> Workshop_2 2h
// Apprendre a utilser UseState()
// Placer les button pour la calculatrice, 0 à 1,*,/,+,-,Clear,=
// Creer un componentButton pour avoir moins de code, qui prend en paramètre la valeur du bouton, et l'action qu'ils fera
// Ajouter les text pour afficher les résultat et le calcul
// Faire la fonction handleClick qui nous permettra de faire le calcul
// Ajouter la fonction dans les different bouton

//--> Workshop_3 3h
// Reprendre la page login du workshop_1
// Creer l'écran sign_up et switch d'écran avec un State
// Creer serveur node js qui un fichier text
// Premiere requete post signup qui prend un user et un password qui lajoute dans un fichier texte renvoie 200 si créé, 409 si joueur existant
// Deuxieme requete post login qui prend un user et un password qui check dans le fichier texte si la personne et que le mot de passe est correct renvoie 200 si oui, 401 si non
// Get les requetes sur l'app avec un fonction signup et login en fetch qui fait la requete node
// Creer une fonction mutate pour call les requetes sign et login

const App = () => {
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
