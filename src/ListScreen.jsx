import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, FlatList } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

function ListItem({ value }) {
    return (
        <Text style={styles.item}>{value}</Text>
    )
}

function ListScreen({ }) {
    return (
        <View style={styles.container}>
            <FlatList data={[
                { key: 'Devin' },
                { key: 'Dan' },
                { key: 'Dominic' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Julie' },
            ]}
                renderItem={({ item }) => <ListItem value={item.key} />}
            />
        </View>
    )
}

export default ListScreen;