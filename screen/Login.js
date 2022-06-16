import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import { useDispatch } from "react-redux"
import { loginUser } from '../context/action/userAction';
import { useSelector } from 'react-redux';



const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user)

    const handleSubmit = () => {

        if (email == '' || password == '') {

            ToastAndroid.show('Fill your Credentials', ToastAndroid.SHORT);

        } else {

            dispatch(loginUser(email, password));

        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.head}>Sign In</Text>

            <View style={styles.inputContainer}>
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

                <Button title="Sign In" color="#f08080"  onPress={() => handleSubmit()} />
            </View>

            <View style={styles.nav}>
                <Text>New Here?</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Register')
                }>
                    <Text style={{ color:"#f08080"  }}>Sign Up</Text>
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
    inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: '15%',
        borderBottomWidth: 1,
        marginBottom: 8,
        padding: 5,
        margin: 25,
        borderColor: 'gray'
    },
    button: {
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    nav: {
        flexDirection: 'row',
        marginTop:10,
    }


})

export default Login