import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function App() {
  const [outputText, setOutputText] = useState("How quickly does this change ?");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Text>{outputText}</Text>
      <Text>This mobile app has no purpose</Text>
      <Text>here is some more text on the home screen</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text changed')} />
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
});
