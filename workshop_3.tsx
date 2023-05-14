import React, { useState } from 'react';
import { Alert, Button, Keyboard, TextInput, View } from 'react-native';
import { useMutation } from 'react-query';
import { ButtonPersonalized, HeaderPersonalized } from './workshop_1';

export const Login = () => {
  const [sign, setSign] = useState(true);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const onSubmit = () => {
    Keyboard.dismiss();
    let obj = {
      user: user,
      password: pass,
    };
    mutate(obj);
  };

  const { mutate } = useMutation(
    (data) => (sign ? signin(data) : signup(data)),
    {
      onSuccess: (data) => {
        console.log(JSON.stringify(data, null, 2));
        if (data.status === 200 && sign) Alert.alert('Connecter');
        if (data.status === 401 && sign)
          Alert.alert('Utilisateur ou mot de passe incorrect');
        if (data.status === 200 && !sign) Alert.alert('Compte créer');
        if (data.status === 401 && !sign) Alert.alert('Compte existant');
      },
    }
  );

  return sign ? (
    <>
      <HeaderPersonalized name={'Login'} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ height: 20 }} />
        <TextInput
          onChangeText={(val) => {
            setUser(val);
          }}
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
          onChangeText={(val) => {
            setPass(val);
          }}
          placeholder="Mot de passe"
          style={{
            width: '80%',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        />
        <View
          style={{
            width: '80%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Button title="S'inscrire ?" onPress={() => setSign(false)} />
        </View>
        <View style={{ height: 20 }} />
        <ButtonPersonalized
          name={'Se connecter'}
          action={() => {
            onSubmit();
          }}
        />
      </View>
    </>
  ) : (
    <>
      <HeaderPersonalized name={'SignUp'} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ height: 20 }} />
        <TextInput
          placeholder="Utilisateur"
          onChangeText={(val) => {
            setUser(val);
          }}
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
          onChangeText={(val) => {
            setPass(val);
          }}
          style={{
            width: '80%',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        />
        <View
          style={{
            width: '80%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Button
            title="Vous avez déja un compte ?"
            onPress={() => setSign(true)}
          />
        </View>
        <View style={{ height: 20 }} />
        <ButtonPersonalized
          name={"S'inscrire"}
          action={() => {
            onSubmit();
          }}
        />
      </View>
    </>
  );
};

export const signup = (obj) => {
  const URL = `http://192.168.1.16:8080/auth/signup`;

  console.log('sign up ', obj);

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };

  return fetch(URL, requestOptions)
    .then((res) => res)
    .then((data) => {
      return data;
    });
};

export const signin = (obj) => {
  const URL = `http://192.168.1.16:8080/auth/login`;

  console.log('login ', obj);

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };

  return fetch(URL, requestOptions)
    .then((res) => res)
    .then((data) => {
      return data;
    });
};
