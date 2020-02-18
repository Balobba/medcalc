import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CheckBox from 'react-native-check-box';

const DVTscoreScreen = ({ navigation }) => {
  const [marks, setMarks] = useState([
    {
      id: 0,
      label: 'Cancer behandlad senaste halvåret eller palliation',
      marked: false,
      value: 1
    },
    { id: 1, label: 'Benpares eller gips', marked: false, value: 1 },
    { id: 2, label: 'Immobilisering / kirurgi', marked: false, value: 1 },
    { id: 3, label: 'Ömhet över kärlsträngen', marked: false, value: 1 },
    { id: 4, label: 'Ensidig helbenssvullnad', marked: false, value: 1 },
    { id: 5, label: '≥ 3 cm skillnad i vadomfång', marked: false, value: 1 },
    {
      id: 6,
      label: 'Pittingödem i det symptomatiska benet',
      marked: false,
      value: 1
    },
    {
      id: 7,
      label: 'Ytliga kollateralvener (ej endast varicer)',
      marked: false,
      value: 1
    },
    { id: 8, label: 'Tidigare diagnosticerad DVT', marked: false, value: 1 },
    {
      id: 9,
      label: 'Annan diagnos minst lika trolig',
      marked: false,
      value: -2
    }
  ]);

  const onUpdateValues = mark => {
    setMarks(
      marks.map(item =>
        item.id === mark.id ? { ...item, marked: !item.marked } : item
      )
    );
  };

  const result = () => {
    let res = { points: 0, info: 'Låg sannorlikhet' };

    marks.forEach(mark => {
      if (mark.marked) {
        res.points += mark.value;
      }
    });

    if (res.points >= 2) {
      res.info = 'Hög sannorlikhet';
    }
    return res;
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

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
        <Text>
          {result().info} ({result().points} poäng)
        </Text>
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
  checkboxesView: {
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  checkbox: { padding: 10, marginRight: 30, marginLeft: 10 }
});

export default DVTscoreScreen;
