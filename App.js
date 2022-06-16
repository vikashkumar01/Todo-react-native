import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from './context/store';
import { useSelector } from 'react-redux';
import Loader from './component/Loader';

import Tabs from './Navigation/Tabs'
import Login from './screen/Login'
import Register from './screen/Register'
import UpdateTask from './screen/UpdateTask'
import { useDispatch } from "react-redux"
import { getUser } from './context/action/userAction';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])


  const { isAuthenticated, loading } = useSelector((state) => state.user)


  return (

    
      <NavigationContainer>
        <Stack.Navigator >
          {
            isAuthenticated ?
              <>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="UpdateTask" component={UpdateTask} />
              </>
              :
              <>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              </>
          }

        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

