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

function Room({ }) {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: "#767577", borderRadius: 10, marginBottom: 10,flexDirection:"row", justifyContent:'center' }}>
      <Text>Room 1</Text>
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

  const [color, setColor] = useState([false, false, false])

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState)
  }

  const colorChange = (idx) => {
    let temp_color = color
    temp_color[idx] = !temp_color[idx]
    console.log(temp_color)
    setColor(temp_color)
  }

  useEffect(() => {

  }, [color])



  return (
    <ScrollView >
      <View style={styles.container}>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ width: 100, height: 100, backgroundColor: "#767577", borderRadius: 10, marginBottom: 10 }}>
            <Text>Room 1</Text>
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: "#767577", borderRadius: 10, marginBottom: 10 }}>
            <Text>Room 2</Text>
          </View>
          <View style={{ width: 100, height: 100, backgroundColor: "#767577", borderRadius: 10, marginBottom: 10 }}>
            <Text>Room 3</Text>
          </View>
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
                  <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(color[0]) ? "Lights On" : "Lights off"}</Text>
                </View>

                <Switch
                  value={color[0]}
                  trackColor={{ false: "#767577", true: "#ff0000" }}
                  onValueChange={() => colorChange(0)}
                />
              </View>

              <View style={styles.listItem}>
                <View>
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>Room 2</Text>
                  <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(color[1]) ? "Lights On" : "Lights off"}</Text>
                </View>

                <Switch
                  value={color[1]}
                  trackColor={{ false: "#767577", true: "#ffdd00" }}
                  onValueChange={() => colorChange(1)}
                />
              </View>

              <View style={styles.listItem}>
                <View>
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>Room 3</Text>
                  <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(color[2]) ? "Lights On" : "Lights off"}</Text>
                </View>

                <Switch
                  value={color[2]}
                  trackColor={{ false: "#767577", true: "#0059ff" }}
                  onValueChange={() => colorChange(2)}
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
    minHeight: height,
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


