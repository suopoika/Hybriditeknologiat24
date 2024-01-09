import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState("0")
  const [limits, setLimits] = useState(0)

  function calculate() {
    const result1 = (220 - age) * 0.65
    const result2 = (220 - age) * 0.85
    const result = result1 + " - " + result2
    setLimits(result)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>

      <TextInput keyboardType='decimal-pad'value = {age}
      onChangeText={text => setAge(text)} />

      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>

      <Button onPress={calculate} title="Calculate"></Button>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 8,
  }
});

