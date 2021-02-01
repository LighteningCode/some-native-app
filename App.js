import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions,FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SwitchesScreen from './src/SwitchesScreen';
import ListScreen from './src/ListScreen';
import ColorPicker from './src/Colorpicker';


const Stack = createStackNavigator();

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


function HomeScreen({ navigation }) {

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Switches")}
        style={styles.button}>
        <Text style={{ color: "white" }}>Go to switches</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={styles.button}>
        <Text style={{ color: "white" }}>Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("colorpicker")}
        style={styles.button}>
        <Text style={{ color: "white" }}>Go to Colorpicker</Text>
      </TouchableOpacity>
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
            options={{ title: "Menu" }}
          />

          <Stack.Screen name="Switches" component={SwitchesScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="colorpicker" component={ColorPicker} />

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
    alignItems: "center",
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
    alignItems: "center",
    borderWidth: 2
  },
  button: {
    backgroundColor: "#0099ff",
    padding: 15,
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10
  }
});


