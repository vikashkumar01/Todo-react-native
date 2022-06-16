import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert, SafeAreaView } from 'react-native'
import { useDispatch } from "react-redux"
import { addTask } from '../context/action/userAction';
import { getTask } from '../context/action/userAction';

const AddTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();

    const addTodo = async() => {


        if (title == '' || description == '') {

            alert('Fill your Credentials');

        } else {

            await dispatch(addTask(title, description));
            alert('Your Task has been added');
            dispatch(getTask())
            setTitle('')
            setDescription('')

        }
    }

    return (
        <SafeAreaView style={styles.container}>
           
            <Text style={styles.text}>ADD TASK</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />

                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={(text) => setDescription(text)}

                />
            </View>
            <View style={styles.button} >
                <Button title="Add Task" color="#f08080" onPress={() => addTodo()} />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },

    text:{
        fontSize:30,
        color:'#f08080',
    },

    containerInput: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width: '80%',
        height: '15%',
        borderBottomWidth: 1,
        padding: 5,
        margin: 20,
    },

    input1: {
        width: '80%',
        height: '15%',
        borderWidth: 1,
        padding: 5,
        outlineStyle: 'none',
    },

    button: {
        width: '80%',
        margin: 10,
    },
})

export default AddTask