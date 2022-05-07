import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Login = () => {
    Alert.alert(email + ", password = " + password)
  }

  const data = {
    marvel: [
      'Doctor Strange',
      'Spiderman',
      'Green Goblin',
      'Black Panther'
    ],
    DC: [
      'Batman',
      'Superman',
      'Aquaman',
      'Joker'
    ]
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
          <Text>Att göra lista </Text>
        <TextInput 
        placeholder='Email'
        onChangeText={(inputValue) => setEmail(inputValue) }/>
        <TextInput placeholder='Password' secureTextEntry={true}
         onChangeText={(inputValue) => setPassword(inputValue) }/>
          <Button
          title="Login" 
          onPress={Login}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  marvel: {

  }
});
