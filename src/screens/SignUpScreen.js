import React, {useState} from 'react'
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity, Dimensions, Platform } from 'react-native'
import {Header} from '../components/common'
import * as userActions from '../store/actions/user'
import {useDispatch, useSelector} from 'react-redux'

const SignUpScreen = props => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.user.allUsers)

    const onSignUp = () => {
        if(name.length <1){
            alert("Enter Name")
            return
        }
        if(email.length <1){
            alert("Enter Email")
            return
        }
        if(number.length <1){
            alert("Enter Phone Number")
            return
        }
        if(password.length <1){
            alert("Enter Password")
            return
        }
        if(password !== repassword){
            alert("Password does not match!")
            return
        }
        const existingUser = allUsers.filter((user) => user.email === email)
        if(existingUser.length>0){
            alert("User with same email already exist")
            return
        }
        dispatch(userActions.onSignUp(
            {
                name,
                email,
                number,
                password
            }
        ))
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/background.jpg")} style={styles.image}>
            </Image>
            <Header navigation = {props.navigation} title={"SIGNUP AS USER"} />
            <View style={styles.cardView}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Full Name"
                    onChangeText={(text) => { setName(text)}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    keyboardType={"email-address"}
                    onChangeText={(text) => { setEmail(text)}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Phone number"
                    keyboardType = {"phone-pad"}
                    onChangeText={(text) => { setNumber(text)}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Type password"
                    secureTextEntry
                    onChangeText={(text) => { setPassword(text)}}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Re-Type password"
                    secureTextEntry
                    onChangeText={(text) => {setRepassword(text) }}
                />
                <Text style={styles.infoText}>We do not share your personal information with anybody</Text>
                <TouchableOpacity onPress = {onSignUp} style={styles.buttonStyle}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
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
        color : "#cccccc",
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
        height: Dimensions.get('window').height / 2,
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

export default SignUpScreen