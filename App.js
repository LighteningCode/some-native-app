import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

let width = Dimensions.get("window").width;

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
  const [redEnabled, setRedEnabled] = useState(false);
  const [yellowEnabled, setYellowEnabled] = useState(false);
  const [blueEnabled, setBlueEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState)
  }



  return (
    <View style={styles.container}>

      <View style={{width: 100,height:100,backgroundColor: "#767577",borderRadius:100,marginBottom: 10}}>
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
                <Text style={{ alignSelf: "center", fontSize: 20 }}>Red</Text>
                <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(redEnabled) ? "Enabled" : "Disabled"}</Text>
              </View>

              <Switch
                value={redEnabled}
                trackColor={{ false: "#767577", true: "#ff0000" }}
                onValueChange={() => setRedEnabled(prevState => !prevState)}
              />
            </View>

            <View style={styles.listItem}>
              <View>
                <Text style={{ alignSelf: "center", fontSize: 20 }}>Yellow</Text>
                <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(yellowEnabled) ? "Enabled" : "Disabled"}</Text>
              </View>

              <Switch
                value={yellowEnabled}
                trackColor={{ false: "#767577", true: "#ffdd00" }}
                onValueChange={() => setYellowEnabled(prevState => !prevState)}
              />
            </View>

            <View style={styles.listItem}>
              <View>
                <Text style={{ alignSelf: "center", fontSize: 20 }}>Yellow</Text>
                <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(blueEnabled) ? "Enabled" : "Disabled"}</Text>
              </View>

              <Switch
                value={blueEnabled}
                trackColor={{ false: "#767577", true: "#0059ff" }}
                onValueChange={() => setBlueEnabled(prevState => !prevState)}
              />
            </View>
          </>
          :
          <View></View>
      }


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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    width: width,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#fff',
  }
});


