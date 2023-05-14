import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Calculatrice = () => {
    const [calcul, setCalcul] = useState('0');
    const [result, setResult] = useState('0');
    const [operation, setOperation] = useState('');

    const handleClick = (val) => {
      if (val === '=' && operation !== '') {
        setResult(eval(operation).toString());
        setOperation('');
      } else if (val === 'C') {
        setCalcul('0');
        setResult('0');
        setOperation('');
      } else {
        if (val !== '=') {
          setOperation(operation + val);
          setCalcul(operation + val);
        }
      }
    };

    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
      >
        <View style={{ flex: 1, width: '100%' }}>
          <Text
            style={{
              width: '100%',
              textAlign: 'right',
              fontSize: 30,
              fontWeight: '700',
              paddingRight: 10,
            }}
          >
            {calcul}
          </Text>
          <Text
            style={{
              width: '100%',
              textAlign: 'right',
              paddingRight: 10,
              fontSize: 60,
              fontWeight: '900',
            }}
          >
            {result}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {Array.from(Array(9)).map((_, index) => (
            <ButtonCalculatrice
              val={index + 1}
              action={() => {
                handleClick(index + 1);
              }}
            />
          ))}
          <ButtonCalculatrice val={'+'} action={() => handleClick('+')} />
          <ButtonCalculatrice val={'0'} action={() => handleClick('0')} />
          <ButtonCalculatrice val={'*'} action={() => handleClick('*')} />
          <ButtonCalculatrice val={'-'} action={() => handleClick('-')} />
          <ButtonCalculatrice val={'/'} action={() => handleClick('/')} />
          <ButtonCalculatrice val={'C'} action={() => handleClick('C')} />
          <ButtonCalculatrice val={'='} action={() => handleClick('=')} />
        </View>
      </SafeAreaView>
    );
  };



const ButtonCalculatrice = ({ val, action }) => {
    return (
      <TouchableOpacity
        onPress={action}
        style={{
          padding: 20,
          borderWidth: 2,
          width: '30%',
          borderRadius: 10,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '900', fontSize: 20 }} key={val}>
          {val}
        </Text>
      </TouchableOpacity>
    );
  };