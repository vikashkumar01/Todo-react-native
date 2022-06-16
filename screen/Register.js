import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity,ToastAndroid,ScrollView } from 'react-native'
import { useDispatch } from "react-redux"
import { registerUser } from '../context/action/userAction';
import { useSelector } from 'react-redux';

const Register = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const {loading,error} = useSelector((state) =>state.user)

    const handleSubmit = () => {

        if (email == '' || password == ''|| username == '') {

            ToastAndroid.show('Fill your Credentials', ToastAndroid.SHORT);

        } else {
        
            dispatch(registerUser(username, email, password));
            ToastAndroid.show('Your Task has been added', ToastAndroid.SHORT);
        }
    }

    return (

        
        <View style={styles.container}>

            <Text style={styles.head}>Sign Up</Text>

            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            </View>

            <View style={styles.button}>
                {
                    error ?
                        <Text style={{ color: 'red', marginBottom: 20, fontWeight: '300' }}>{error}</Text>
                        : null
                }

                <Button title="Sign Up" color="#f08080"  onPress={()=>handleSubmit()}/>
            </View>

            <View style={styles.nav}>
                <Text>Already Register?</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Login')
                }>
                    <Text style={{ color:"#f08080"  }}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </View>

      
        
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
    head: {
        fontSize: 30,
        color:"#f08080" 
    },

    inputContainer:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',  
    },

    input: {
        width: '80%',
        height: '10%',
        borderBottomWidth: 1,
        marginBottom: 8,
        padding: 5,
        margin:30,
        borderColor:'gray',
    },
    button: {
        width: '80%'
    },
    nav: {
        flexDirection: 'row',
        marginTop:10,
    }
})

export default Register