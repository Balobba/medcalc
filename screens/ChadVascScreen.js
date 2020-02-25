import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
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
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <Header navigation={navigation} />

      <View style={styles.fieldView}>
        <Text style={styles.ageText}>Ålder:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder='Skriv ett värde, exempelvis "25"'
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
              /*checkBoxColor={'#ff5252'}*/
            />
          </View>
        ))}
      </View>
      <View style={styles.resView}>
        <Text style={[styles.resText, styles.resNumber]}>
          {result().points} poäng
        </Text>
        <Text style={styles.resText}>
          Årlig risk för tromboembolisk händelse är {result().procent}%
        </Text>
        <Text style={styles.resText}>
          Rekommendationer är {result().recommended}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  fieldView: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ageText: {
    textAlign: 'center',
    fontSize: 20
  },
  ageField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    textAlign: 'center',
    marginTop: 10
  },
  checkboxesView: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 2
  },
  resView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  resText: {
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 2,
    color: '#ff5252'
  },
  resNumber: {
    fontSize: 30
  },
  checkbox: { padding: 10, marginRight: 30, marginLeft: 10 }
});

export default ChadVascScreen;
