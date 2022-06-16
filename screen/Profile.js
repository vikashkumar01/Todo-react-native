import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useDispatch } from "react-redux"
import { logoutUser } from '../context/action/userAction';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import Loader from '../component/Loader';

const AddTask = () => {

    const { user,loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onLogOut = async () => {

        dispatch(logoutUser())

    }

    const onDeleteAccount = async () => {
        await axios.delete("https://todowebap.herokuapp.com/api/user/deleteMyProfile/" + user._id);
        navigation.navigate('Login')
    }

    return (

        loading ? <Loader /> :
            <View style={styles.container}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'gray', fontSize: 20, fontWeight: 'bold', margin: 10 }}>{user?.username}</Text>
                    <Text style={{ color: 'gray', fontSize: 20, fontWeight: 'bold', margin: 10 }}>{user?.email}</Text>
                </View>

                <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={onLogOut}
                    >
                        <Text style={{ color: 'red', fontSize: 20 }}>Logout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                        onPress={onDeleteAccount}
                    >
                        <Text style={{ color: 'red', fontSize: 20 }}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    profileImg: {
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray"
    }

})

export default AddTask