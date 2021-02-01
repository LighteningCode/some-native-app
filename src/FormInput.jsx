import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View, Dimensions, pick, FlatList, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import tailwind from "tailwind-rn";


function FormInput({ }) {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const formControl = tailwind("border border-black w-full py-3 px-2 rounded-lg mb-5")

    const openModal = () => {
        setIsModalVisible(true)
    }

    return (
        <>

            <Modal
                visible={isModalVisible}
                transparent={true}>
                
                <View>
                    <Text style={{textAlign: 'center'}}>Select gender</Text>
                    <Picker style={{ height: 10, width: 100, marginBottom: 50 }}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>
            </Modal>

            <View style={tailwind("h-full")}>
                <View style={tailwind("pt-12 items-center px-10")}>
                    <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full mb-12")}>
                        <Text style={tailwind('text-blue-800 font-semibold')}>Form input</Text>
                    </View>

                    <Text>Enter Name:</Text>
                    <TextInput style={formControl} value={"10"} />

                    <Text>Enter Age:</Text>
                    <TextInput style={formControl} value={"10"} />

                    <Text>Enter date of gender:</Text>
                    <View style={tailwind(`w-full px-10 py-3 rounded mb-10`)}>
                        <TouchableOpacity style={formControl} onPress={openModal}>
                            <Text style={{ textAlign: "center", fontWeight: 'bold', color: "black" }}>Select gender</Text>
                        </TouchableOpacity>
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