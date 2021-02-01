import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, FlatList, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})


function ColorPicker({ }) {
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',marginTop: 20}}>Color picker</Text>

            <View>
                
            </View>
        </View>
    )
}


export default ColorPicker;