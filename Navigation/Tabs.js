import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from 'react-native'

import Home from '../screen/Home'
import AddTask from '../screen/AddTask'
import Profile from '../screen/Profile'


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name="tasks" size={24} color={focused ? '#e32f45' : '#748c94'} />
            <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>Task</Text>
          </View>
        ),
      }} />

      <Tab.Screen name="AddTask" component={AddTask}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="plus" size={24} color={focused ? '#e32f45' : '#748c94'} />
              <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>Add</Text>
            </View>
          ),
        }}
      />
      
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="setting" size={24} color={focused ? '#e32f45' : '#748c94'} />
              <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>Profile</Text>
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Tabs