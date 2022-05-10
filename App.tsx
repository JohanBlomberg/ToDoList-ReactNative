import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, SafeAreaView, Alert, Button } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function App() {

  const [bucket, setBucket] = useState('Hej')



  const addBucket = () => { 
   fetch("http://127.0.0.1:3002/api/buckets", {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(bucket),
    mode: 'no-cors'
   })
  .then(response => response.json())
  .then((data) => {
  console.log(data)
   })
   .catch((error) => {
     console.log(error)
   })
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require ('./image/Logo.png')}/>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Faktura</DataTable.Title>
          <DataTable.Title>Summa</DataTable.Title>
          <DataTable.Title>Utfrd</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Biltema</DataTable.Cell>
          <DataTable.Cell>300 kr</DataTable.Cell>
          <DataTable.Cell><Button
          title="Betald" 
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
    marginTop: -300
  },

});
