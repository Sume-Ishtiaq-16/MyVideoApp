import React, {useState} from 'react'
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity, Dimensions, Platform } from 'react-native'
import {Header} from '../components/common'
import {useDispatch} from 'react-redux'
import * as userActions from '../store/actions/user'

const LoginScreen = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onSignUp = () => {
        props.navigation.navigate('SignUp')
    }

    const onLogin = () => {
        if(email.length <1){
            alert("Enter Email")
            return
        }
        if(password.length <1){
            alert("Enter Password")
            return
        }
        dispatch(userActions.onLogin({email : email, password:password}))
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/background.jpg")} style={styles.image}>
            </Image>
            <Header navigation = {props.navigation} title={"LOGIN"} />
            <View style={styles.cardView}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email Address"
                    keyboardType = {'email-address'}
                    onChangeText={(text) => { setEmail(text)}}
                />
                <TextInput
                    style={styles.inputStyle}
                    secureTextEntry
                    placeholder="Type password"
                    onChangeText={(text) => { setPassword(text)}}
                />
                 <TouchableOpacity onPress={onLogin} style={styles.buttonStyle}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <Text onPress={onSignUp} style={styles.infoText}>Don't have an account? Signup</Text>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: "center",
        alignItems: 'center'
    },
    inputStyle: {
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        marginVertical: 5,
        borderRadius: 10
    },
    infoText : {
        color : "#b52924",
        marginHorizontal : 20,
        textAlign:'center'
    },
    cardView: {
        position: 'absolute',
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 60,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        elevation: 5,
        padding: 15,
        //margin : 20,
        //height: 300
    },
    title: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: "800",
        marginBottom: Dimensions.get('window').height / 2 - 100
    },
    btnContainer: {
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        flexDirection: 'row'
    },
    image: {
        // flex: 1,
        top: 0,
        height: Dimensions.get('window').height / 2 ,
        position: 'absolute',
        resizeMode: "cover",

    },
    btnText: {
        alignSelf: 'center',
        color: '#ffffff'
    },
    buttonStyle : {
        backgroundColor : '#b52924',
        width : '100%',
        padding: 20,
        marginVertical: 10,
        borderRadius : 30
    }
})

export default LoginScreen