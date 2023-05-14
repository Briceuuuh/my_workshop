import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


export const ButtonPersonalized = ({ name, action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.btnStyle}>
      <Text style={styles.txtStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export const HeaderPersonalized = ({ name }) => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
    </SafeAreaView>
  );
};

export const Screen1 = () => {
  return (
    <>
      <HeaderPersonalized name={'Screen 1'} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>screen</Text>
      </View>
    </>
  );
};

export const Login = ({action}) => {
  return (
    <>
      <HeaderPersonalized name={'Login'} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ height: 20 }} />
        <TextInput
          placeholder="Utilisateur"
          style={{
            width: '80%',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        />
        <View style={{ height: 20 }} />
        <TextInput
          placeholder="Mot de passe"
          style={{
            width: '80%',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        />
        <View style={{ height: 20 }} />
        <ButtonPersonalized name={'Se connecter'} action={action} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
  },

  txtStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
