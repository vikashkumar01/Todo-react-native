import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import { useDispatch } from "react-redux"
import { editTodo } from '../context/action/userAction';
import { getTask } from '../context/action/userAction';
import { useNavigation,useRoute } from '@react-navigation/native';

const UpdateTask = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();

    const [title, setTitle] = useState(route.params?.item?.title)
    const [description, setDescription] = useState(route.params?.item?.description)


    const UpdateTask = async () => {

        if (title == '' || description == '') {

            alert('Fill your Credentials');

        } else {

            await dispatch(editTodo(route.params?.item?._id,title, description))
            alert('Your Task has been Updated');
            dispatch(getTask())
            navigation.navigate('Home');

        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>UPDATE TASK</Text>
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
                <Button title="Update Task" color="#f08080" onPress={() => UpdateTask()} />

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

    text: {
        fontSize: 30,
        color: '#f08080',
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

export default UpdateTask