import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import homeScreen from './homeScreen'
import add from './add'
import account from './account'



const Tab = createBottomTabNavigator();
export default class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
      //      screenOptions={({ route }) => ({
      //      tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     let iconSize;
      //     if (route.name === 'home') {
      //       iconName = 'home'
      //       iconSize = focused ? 25 : 20

      //     } else if (route.name === 'profile'){
      //       iconName = 'user-alt'
      //       iconSize = focused ? 25 : 20
      //     }
      //     return <Icon name={iconName} size={iconSize} color={color} />;
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: 'black',
      //   inactiveTintColor: 'black',

      //   style:{justifyContent:'center',alignItems:'center',padding:10, shadowColor: "#000",
      //   shadowOffset: {
      //     width: 0,
      //     height:4,
      //   },
      //   shadowOpacity: 0.32,
      //   shadowRadius: 5.46,
      //   elevation: 9.5},
      // }}
      >

        <Tab.Screen
          name="homeScreen"
          component={homeScreen}

          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Image
                style={{
                  width: 25, height: 25

                }} source={require('../../assets/images/home.png')}>

              </Image>)
          }}></Tab.Screen>
        <Tab.Screen
          name="add"
          component={add}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  position: 'absolute',
                  bottom: 1,
                  height: 70,
                  width: 70,
                  borderRadius: 40,
                  backgroundColor: '#00B421',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'gray',
                  shadowColor: "black",
                  shadowOffset: {
                    width: 20,
                    height: 5
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.84,
                  elevation: 8,
                }}>
                <Image
                  style={{

                  }} source={require('../../assets/images/plus.png')} />


              </View>)
          }}></Tab.Screen>
        <Tab.Screen
          name="account"
          component={account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <Image
                style={{
                  width: 25, height: 25

                }} source={require('../../assets/images/account.png')}>

              </Image>)
          }}></Tab.Screen>
      </Tab.Navigator>
    )
  }
}