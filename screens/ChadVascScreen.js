import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';
import CheckBox from 'react-native-check-box';

//https://www.npmjs.com/package/react-native-check-box

const ChadVascScreen = ({ navigation }) => {
  const [age, setAge] = useState();

  //3rd is 2 points, rest is 1 point
  const [marks, setMarks] = useState([
    { id: 0, label: 'Hjärtsvikt', marked: false, value: 1 },
    { id: 1, label: 'Hypertoni', marked: false, value: 1 },
    { id: 2, label: 'Stroke / TIA / Tromboembolism', marked: false, value: 2 },
    { id: 3, label: 'Diabetes', marked: false, value: 1 },
    { id: 4, label: 'Kärlsjukdom', marked: false, value: 1 },
    { id: 5, label: 'Kvinna', marked: false, value: 1 }
  ]);

  const result = () => {
    let res = { points: 0, procent: 0, recommended: 'ingen behandling' };
    let calcProcent = [0, 1.3, 2.2, 3.2, 4.0, 6.7, 9.8, 9.6, 6.7, 15.2];

    marks.forEach(mark => {
      if (mark.marked) {
        res.points += mark.value;
      }
    });

    if (age >= 75) {
      res.points += 2;
    } else if (age >= 65 && age <= 74) {
      res.points += 1;
    }

    if (res.points != 0) {
      res.recommended =
        'Waran eller nya antikoagulantia, dock brukar inte behandling rekommenderas till dem där kvinnligt kön är enda riskfaktorn';
    }

    res.procent = calcProcent[res.points];

    return res;
  };

  const onUpdateValues = mark => {
    setMarks(
      marks.map(item =>
        item.id === mark.id ? { ...item, marked: !item.marked } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.fieldView}>
        <Text>Ålder:</Text>
        <TextInput
          keyboardType="numeric"
          maxLength={3}
          style={styles.ageField}
          onChangeText={age => setAge(age.replace(/[^0-9]/g, ''))}
          age={age}
        />
      </View>

      <View style={styles.checkboxesView}>
        {marks.map(mark => (
          <View key={mark.id}>
            <CheckBox
              onClick={() => {
                onUpdateValues(mark);
              }}
              isChecked={mark.marked}
              leftText={mark.label}
              style={styles.checkbox}
            />
          </View>
        ))}
      </View>
      <View>
        <Text>{result().points} poäng</Text>
        <Text>
          Årlig risk för tromboembolisk händelse är {result().procent}%
        </Text>
        <Text>Rekommendationer är {result().recommended}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  fieldView: {
    alignItems: 'center'
  },
  ageField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200
  },
  checkboxesView: {
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  checkbox: { padding: 10, marginRight: 30, marginLeft: 10 }
});

export default ChadVascScreen;
