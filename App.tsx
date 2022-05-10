import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, SafeAreaView, Alert, Button } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function App() {

  const [bucket, setBucket] = useState('Hej')

  const data = { username: 'example'};

  const addBucket = () => {
    fetch("api/buckets", {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then (data => {
      console.log('Success', data)
    })
    .catch((error) => {
      console.error('Error', error)
    })

  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require ('./image/Logo.jpg')}/>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Hink</DataTable.Title>
          <DataTable.Title>Färg</DataTable.Title>
          <DataTable.Title>Köpt</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Biltema 5 Liter</DataTable.Cell>
          <DataTable.Cell>Blå</DataTable.Cell>
          <DataTable.Cell><Button
          title="Klar" 
          onPress={addBucket}/></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Full Moon Cocktailhink</DataTable.Cell>
          <DataTable.Cell>Grön</DataTable.Cell>
          <DataTable.Cell><Button
          title="Klar" 
          onPress={addBucket}/></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>DeBuyer Stainless Steel</DataTable.Cell>
          <DataTable.Cell>Metall</DataTable.Cell>
          <DataTable.Cell><Button
          title="Klar" 
          onPress={addBucket}/></DataTable.Cell>
        </DataTable.Row>

      </DataTable>
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
