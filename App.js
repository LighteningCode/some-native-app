import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

function Room({ id, state=false }) {
  return (
    <View style={(state) ? styles.roomStylesON : styles.roomStyleOFF}>
      <Text style={(state) ? { color: "black"} : {color: "white"}}>Room {id}</Text>
    </View>
  )
}

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Button title="Go to switches"
        onPress={() => navigation.navigate("Switches")} />
    </View>
  )
}

function SwitchesScreen({ }) {

  const [isEnabled, setIsEnabled] = useState(false);

  const [room1, setRoom1] = useState(false)
  const [room2, setRoom2] = useState(false)
  const [room3, setRoom3] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState)
  }

  return (
    <ScrollView >
      <View style={styles.container}>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <Room state={room1} id="1" />
          <Room state={room2} id="2" />
          <Room state={room3} id="3" />
        </View>


        <Text style={{ marginBottom: 10 }}>Toggle to switch between "ON" and "OFF" state</Text>
        <Text>{(isEnabled) ? "Enabled" : "Disabled"}</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          trackColor={{ false: "#767577", true: "#ffaa00" }}
        />

        {
          (isEnabled) ?
            <>
              <View style={styles.listItem}>
                <View>
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>Room 1</Text>
                  <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(room1) ? "Lights On" : "Lights off"}</Text>
                </View>

                <Switch
                  value={room1}
                  trackColor={{ false: "#767577", true: "#0059ff" }}
                  onValueChange={() => setRoom1(!room1)}
                />
              </View>

              <View style={styles.listItem}>
                <View>
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>Room 2</Text>
                  <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(room2) ? "Lights On" : "Lights off"}</Text>
                </View>

                <Switch
                  value={room2}
                  trackColor={{ false: "#767577", true: "#0059ff" }}
                  onValueChange={() => setRoom2(!room2)}
                />
              </View>

              <View style={styles.listItem}>
                <View>
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>Room 3</Text>
                  <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(room3) ? "Lights On" : "Lights off"}</Text>
                </View>

                <Switch
                  value={room3}
                  trackColor={{ false: "#767577", true: "#0059ff" }}
                  onValueChange={() => setRoom3(!room3)}
                />
              </View>
            </>
            :
            <View></View>
        }


      </View>

    </ScrollView>
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
    justifyContent: 'center',
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


