import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

//https://www.npmjs.com/package/react-native-simple-radio-button

const ApgarScreen = ({ navigation }) => {
  const [pulse, setPulse] = useState(2);
  const [respiration, setRespiration] = useState(2);
  const [color, setColor] = useState(2);
  const [muscle, setMuscle] = useState(2);
  const [excitability, setExcitability] = useState(2);

  let pulse_props = [
    { label: "≥ 100", value: 2 },
    { label: "< 100", value: 1 },
    { label: "Ingen", value: 0 }
  ];

  let respiration_props = [
    { label: "Regelbunden, skrik", value: 2 },
    { label: "Oregelbunden", value: 1 },
    { label: "Ingen", value: 0 }
  ];

  let color_props = [
    { label: "Rosig", value: 2 },
    { label: "Perifer cyanos", value: 1 },
    { label: "Blek eller cyanotisk", value: 0 }
  ];

  let muscle_props = [
    { label: "Aktiva rörelser", value: 2 },
    { label: "Svag", value: 1 },
    { label: "Slapp", value: 0 }
  ];

  let excitability_props = [
    { label: "God", value: 2 },
    { label: "Svag", value: 1 },
    { label: "Ingen", value: 0 }
  ];

  const result = () => {
    return pulse + respiration + color + muscle + excitability;
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View>
        <RadioForm
          radio_props={pulse_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={"#ff5252"}
          selectedButtonColor={"#ff5252"}
          labelStyle={styles.button}
          animation={true}
          onPress={value => {
            setPulse(value);
          }}
        />
      </View>
      <View>
        <RadioForm
          radio_props={respiration_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={"#ff5252"}
          selectedButtonColor={"#ff5252"}
          labelStyle={styles.button}
          animation={true}
          onPress={value => {
            setRespiration(value);
          }}
        />
      </View>
      <View>
        <RadioForm
          radio_props={color_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={"#ff5252"}
          selectedButtonColor={"#ff5252"}
          labelStyle={styles.button}
          animation={true}
          onPress={value => {
            setColor(value);
          }}
        />
      </View>
      <View>
        <RadioForm
          radio_props={muscle_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={"#ff5252"}
          selectedButtonColor={"#ff5252"}
          labelStyle={styles.button}
          animation={true}
          onPress={value => {
            setMuscle(value);
          }}
        />
      </View>
      <View>
        <RadioForm
          radio_props={excitability_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={"#ff5252"}
          selectedButtonColor={"#ff5252"}
          labelStyle={styles.button}
          animation={true}
          onPress={value => {
            setExcitability(value);
          }}
        />
      </View>
      <View>
        <Text>{result()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    paddingRight: 5,
    paddingLeft: 5
  }
});

export default ApgarScreen;
