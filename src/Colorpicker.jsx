import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, FlatList, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from "@react-native-community/slider";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sliderView: {
        flexDirection: "column",
        alignSelf: 'center'
    }
})

function ColorControl({ title, value, onChange, color }) {
    return (
        <>
            <Text style={{ textAlign: "center", marginTop: 20, color: color }}>{title} Value: {value}</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                onValueChange={onChange}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#FFFFFF"
            />
        </>
    )
}


function ColorPicker({ }) {

    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)
    const [textColor, setTextColor] = useState("black")

    const handleValueChange = (value, name) => {
        let compValue = Math.round(((value * 100) / 100) * 255)
        if (compValue < 150) {
            setTextColor("white")
        } else {
            setTextColor("black")
        }
        switch (name) {
            case "red":
                setRed(compValue)
                break;
            case "blue":
                setBlue(compValue)
                break;
            case "green":
                setGreen(compValue)
                break;
            default:
                break;
        }
    }

    return (
        <View style={{ ...styles.container, backgroundColor: `rgb(${red}, ${blue}, ${green})` }}>
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Color picker</Text>

            <View style={styles.sliderView}>

                <ColorControl title="Red" color={textColor} value={red} onChange={(value) => handleValueChange(value, "red")} />
                <ColorControl title="Blue" color={textColor} value={blue} onChange={(value) => handleValueChange(value, "blue")} />
                <ColorControl title="Green" color={textColor} value={green} onChange={(value) => handleValueChange(value, "green")} />

            </View>
        </View>
    )
}


export default ColorPicker;