import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, pick, FlatList, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import tailwind from "tailwind-rn";


const styles = StyleSheet.create({
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
        justifyContent: 'space-around',
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
    selectbuttonActive: {
        textAlign: "center",
        fontWeight: 'bold',
        width: 100,
        paddingHorizontal: 150,
        paddingVertical: 12
    },
    selectbuttondeactivated: {
        textAlign: "center",
        fontWeight: 'bold',
        color: "black",
        width: 100,
        paddingHorizontal: 150,
        paddingVertical: 12
    }
})

function FormInput({ }) {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [formData, setFormData] = useState({ firstname: "", lastname: "", gender: "male", age: "" })
    const formControl = tailwind("border border-black w-full py-3 px-2 rounded-lg mb-5")

    const openModal = () => {
        setIsModalVisible(true)
    }

    const changeText = (text, name) => {
        setFormData(prevState => ({ ...prevState, [name]: text }))
    }



    return (
        <>

            <Modal
                visible={isModalVisible}
                transparent={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center' }}>Select gender</Text>
                        <Picker style={{ height: 10, width: 100, marginBottom: 0, backgroundColor: "red" }}>
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                    </View>
                </View>
            </Modal>

            <View style={tailwind("h-full")}>
                <View style={tailwind("pt-12 items-center px-10")}>
                    <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full mb-12")}>
                        <Text style={tailwind('text-blue-800 font-semibold')}>Form input</Text>
                    </View>

                    <Text>Enter firstname:</Text>
                    <TextInput style={formControl} onChangeText={(text) => changeText(text, 'firstname')} value={formData.firstname} />

                    <Text>Enter lastname:</Text>
                    <TextInput style={formControl} onChangeText={(text) => changeText(text, 'lastname')} value={formData.lastname} />

                    <Text>Enter Age:</Text>
                    <TextInput style={formControl} onChangeText={(text) => changeText(text, 'age')} value={formData.age} />

                    <Text>Select gender:</Text>
                    <View style={{...tailwind("rounded-lg"),flexDirection:"row", marginVertical: 15, width:250,height:40, backgroundColor:"transparent",justifyContent:"space-around", alignItems: 'center',borderColor: "blue",borderWidth:1}}>
                        <TouchableOpacity><Text style={{color:"blue"}}>Male</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{color:"blue"}}>Female</Text></TouchableOpacity>
                    </View>


                    <TouchableOpacity style={tailwind("bg-blue-500 w-64 px-10 py-3 rounded")}>
                        <Text style={{ textAlign: "center", fontWeight: 'bold', color: "white" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


export default FormInput;