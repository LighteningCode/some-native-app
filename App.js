import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Button title="Go to switches"
      onPress={()=> navigation.navigate("Switches")} />
    </View>
  )
}

function SwitchesScreen({  }) {

  const [isEnabled, setIsEnabled] = useState();

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState)
  }

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        trackColor={{ false: "#767577", true: "#ffaa00" }}
      />
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
});
