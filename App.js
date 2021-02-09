import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"
import { color } from 'react-native-reanimated';
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text >Home Screen</Text>
    <Button onPress={() => navigation.navigate("Detail")} title="Go to Detail" style={styles.but}/>
  </View>
  )
 }
function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text>Detail Screen</Text>
      <Button styles={styles.button} onPress={() => navigation.navigate('Home')} title="Go to Home Screen"/>
  </View>)
  
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen}/>
    </Stack.Navigator>
  </NavigationContainer>)
  
}
const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    shadowColor:'orange',
  },

  
});
