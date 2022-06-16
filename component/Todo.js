import react,{useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {getTask, deleteTodo } from '../context/action/userAction';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux"
import { useNavigation } from '@react-navigation/native';

const Todo = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(getTask());
      }, [dispatch])

    const onDeleteTask = () =>{
        dispatch(deleteTodo(props.item.item._id));
        dispatch(getTask());
    }

    const onUpdateTask = () =>{
       navigation.navigate("UpdateTask",{item:props.item.item});
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.details}>
                    <Text style={styles.title}>{props.item.item.title.toUpperCase()}</Text>
                    <Text style={styles.description}>{props.item.item.description}</Text>
                </View>
                <View style={styles.button}>

                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop:10 }}
                   onPress={onUpdateTask}
                >
                     <AntDesign name="edit" size={24} color="green" />
                </TouchableOpacity>
                   

             <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop:10 }}
                   onPress={onDeleteTask}
                >
                    <AntDesign name="delete" size={24} color="red" />
                </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'50%',
        backgroundColor: '#d4cecb',
        borderRadius:5,
        marginVertical:2.5,
        marginRight:1.5,
    },
    view1: {
        width: '100%',
        height: 300,
        padding: 10,
       
    },
    details: {
        height: '80%',
        alignItems: 'center'
    },

    title: {
        marginTop: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },

    description: {
        marginTop: 10,
        fontSize: 15,
        color: 'gray'
    },

    button: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})

export default Todo;