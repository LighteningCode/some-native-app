import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SwitchesScreen from './src/SwitchesScreen';


const Stack = createStackNavigator();

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Button title="Go to switches"
        onPress={() => navigation.navigate("Switches")} />
    </View>
  )
}



export default function App() {



  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome Home" }}
          />
          <Stack.Screen name="Switches" component={SwitchesScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: height - 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingVertical: 30
  },
  listItem: {
    width: width,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#fff',
    marginVertical: 10
  },
  roomStylesON: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignItems:"center",
    borderWidth: 2
  },
  roomStyleOFF: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignItems:"center",
    borderWidth: 2
  }

});


