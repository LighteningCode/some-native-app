import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from 'react';

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

  const [color, setColor] = useState([false,false,false])

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState)
  }

  const colorChange = (idx) => {
    let temp_color = color
    temp_color[idx] = !temp_color[idx]
    console.log(temp_color)
    setColor(temp_color)
  }

  useEffect(()=>{

  },[color])



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
                <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(color[0]) ? "Enabled" : "Disabled"}</Text>
              </View>

              <Switch
                value={color[0]}
                trackColor={{ false: "#767577", true: "#ff0000" }}
                onValueChange={() => colorChange(0)}
              />
            </View>

            <View style={styles.listItem}>
              <View>
                <Text style={{ alignSelf: "center", fontSize: 20 }}>Yellow</Text>
                <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(color[1]) ? "Enabled" : "Disabled"}</Text>
              </View>

              <Switch
                value={color[1]}
                trackColor={{ false: "#767577", true: "#ffdd00" }}
                onValueChange={() => colorChange(1)}
              />
            </View>

            <View style={styles.listItem}>
              <View>
                <Text style={{ alignSelf: "center", fontSize: 20 }}>Yellow</Text>
                <Text style={{ fontSize: 10, color: "#a3a3a3" }}>{(color[2]) ? "Enabled" : "Disabled"}</Text>
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


