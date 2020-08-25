import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onboard from '../screen/onbard/onboard'
import signin from '../screen/account/signin'
import signup from '../screen/account/signup'
import home from '../screen/home/homeScreen'
import auth from '@react-native-firebase/auth';
import TabNavigation from '../screen/home/TabNavigation'
import detailScreen from '../screen/home/detailScreen'
import homeScreen from '../screen/home/homeScreen'
const Stack = createStackNavigator();

export default class MainNavigation extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="onboard"
          screenOptions={{
            headerShown: false,
          }}>

          <Stack.Screen name="onboard" component={onboard} />
          <Stack.Screen name="signin" component={signin} />
          <Stack.Screen name="signup" component={signup} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="homeScreen" component={homeScreen} />
          <Stack.Screen name="detailScreen" component={detailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
