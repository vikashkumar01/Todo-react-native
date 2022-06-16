import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useDispatch } from "react-redux"
import { getTask } from '../context/action/userAction';
import { useSelector } from 'react-redux';

import Todo from '../component/Todo'

const Home = () => {

    const { todos } = useSelector((state) => state.getTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTask());
    }, [dispatch])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.view2}>
                    <FlatList
                        data={todos}
                        renderItem={(item) => { return (<Todo item={item} />) }}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                    />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

})

export default Home