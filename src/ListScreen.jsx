import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        justifyContent: 'space-between'
    }
})

function ListItem({ name, age }) {
    return (
        <TouchableOpacity style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text style={styles.item}>{name}</Text>
            <Text style={{...styles.item, color: "#8a8a8a"}}>{age} yrs</Text>
        </TouchableOpacity>
    )
}

function ListScreen({ }) {
    return (
        <View style={styles.container}>
            <FlatList data={[
                { name: 'Devin', age: "10" },
                { name: 'Dan', age: "16" },
                { name: 'Dominic', age: "15" },
                { name: 'Jackson', age: "25" },
                { name: 'James', age: "30" },
                { name: 'Joel', age: "26" },
                { name: 'John', age: "40" },
                { name: 'Jillian', age: "35" },
                { name: 'Jimmy', age: "31" },
                { name: 'Julie', age: "60" },
            ]}
                renderItem={({ item }) => <ListItem name={item.name} age={item.age} />}
            />
        </View>
    )
}

export default ListScreen;