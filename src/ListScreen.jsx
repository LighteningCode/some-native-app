import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, FlatList, Modal } from 'react-native';
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'transparent',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        height: 200,
        width: 150,
        justifyContent:'space-around',
        borderRadius: 10,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowOpacity: 0.15,
        shadowRadius: 30.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
})

function ListItem({ name, age, click }) {

    return (
        <TouchableOpacity onPress={click} style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text style={styles.item}>{name}</Text>
            <Text style={{ ...styles.item, color: "#8a8a8a" }}>{age} yrs</Text>
        </TouchableOpacity>
    )
}

function ListScreen({ }) {

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({ name: "", age: "" })

    const handleOpenModalListItem = (name, age) => {
        // setModalIsVisible(prevState => !prevState)
        setItemSelected({ name: name, age: age })
        console.log(`Hello ${name}`)
        setModalIsVisible(true)
    }

    const handleCloseModalListItem = (name, age) => {
        setItemSelected({ name: "", age: "" })
        console.log(`Modal closed`)
        setModalIsVisible(false)
    }



    return (
        <>
            <Modal
                animationType="fade"
                visible={modalIsVisible}
                backdropColor={'green'}
                transparent={true}
                onRequestClose={handleCloseModalListItem}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Name: {itemSelected.name}</Text>
                        <Text>Age: {itemSelected.age}</Text>
                        <TouchableOpacity style={styles.openButton} onPress={handleCloseModalListItem}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>



            <View style={styles.container}>

                <FlatList data={[
                    { key: 'Devin', age: "10" },
                    { key: 'Dan', age: "16" },
                    { key: 'Dominic', age: "15" },
                    { key: 'Jackson', age: "25" },
                    { key: 'James', age: "30" },
                    { key: 'Joel', age: "26" },
                    { key: 'John', age: "40" },
                    { key: 'Jillian', age: "35" },
                    { key: 'Jimmy', age: "31" },
                    { key: 'Julie', age: "60" },
                ]}
                    renderItem={({ item }) => <ListItem click={() => handleOpenModalListItem(item.key, item.age)} onClose={handleCloseModalListItem} name={item.key} age={item.age} />}
                />
            </View>
        </>
    )
}

export default ListScreen;