import React from 'react'
import {Text} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import VideoListScreen from '../screens/VideoListScreen'
import VideoDetailScreen from '../screens/VideoDetailScreen'
import {useSelector} from 'react-redux'
import {videoListScreenOptions} from '../screens/VideoListScreen'
import {videoScreenOptions} from '../screens/VideoDetailScreen'

const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()
const MainStack = createStackNavigator()

const AuthStackNavigator = () => {
    return(
        <AuthStack.Navigator initialRouteName="Register">
            <AuthStack.Screen 
            options={{headerShown: false}}
            name="Register" 
            component = {RegisterScreen} />
            <AuthStack.Screen 
            options={{headerShown: false}}
            name="Login" 
            component = {LoginScreen} />
            <AuthStack.Screen 
            options={{headerShown: false}}
            name="SignUp" 
            component = {SignUpScreen} />
        </AuthStack.Navigator>
    )
}

const option = (title) => ({
    headerShown : true,
    headerTitle : title,
    headerTintColor : "#b52924"
    // headerTitle : () => (
    //     <Text style={{color:"#b52924", alignSelf:"center"}}>{title}</Text>
    // ),
    
})

const AppStackNavigator = () => {
    return(
        <AppStack.Navigator initialRouteName="VideoList">
            <AppStack.Screen 
            options={videoListScreenOptions}
            name="VideoList" 
            component = {VideoListScreen} />
             <AppStack.Screen 
            options={videoScreenOptions}
            name="VideoDetail" 
            component = {VideoDetailScreen} />
        </AppStack.Navigator>
    )
}

const AppNavigator = () => {
    const isLogin = useSelector(state => state.user.isLogin)
    return(
        <SafeAreaProvider>
            <NavigationContainer>
            {!isLogin && <AuthStackNavigator />}
            {isLogin && <AppStackNavigator />}
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator

