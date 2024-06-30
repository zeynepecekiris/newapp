import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button title="Kurslarim" onPress={() => navigation.navigate('Kurslarim')}/>
      <Button title="KursBilgilerim" onPress={() => navigation.navigate('KursBilgilerim')}/>
    </View>
  )
}

const styles = StyleSheet.create({})