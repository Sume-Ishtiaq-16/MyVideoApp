import React, {useState} from 'react'
import {Text, StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions} from 'react-native'

const RegisterScreen = props => {

    const [selctedBtn, setSelectedBtn] = useState(0)

    const onLogin = () => {
        setSelectedBtn(0)
        props.navigation.navigate('Login')
    }

    const onSignUp = () => {
        setSelectedBtn(1)
        props.navigation.navigate('SignUp')
    }

    return(
        <View style={styles.container}>
           <ImageBackground source={require("../assets/background.jpg")} style={styles.image}>
               <Text style = {styles.title}>VideoApp</Text>
               <View style={styles.btnContainer}>
                   <TouchableOpacity onPress={onLogin} style={selctedBtn===0 ? styles.btnSelected : styles.btnUnSelected}>
                       <Text style = {selctedBtn == 0 ? styles.textSelected : styles.textUnSelected}>Login</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={onSignUp}  style={selctedBtn===1 ? styles.btnSelected : styles.btnUnSelected}>
                       <Text style = {selctedBtn == 1 ? styles.textSelected : styles.textUnSelected}>Sign Up</Text>
                   </TouchableOpacity>
               </View>
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title : {
        alignSelf:'center',
        color : 'white',
        fontSize : 30,
        fontWeight : "800",
        marginBottom : Dimensions.get('window').height/2 - 100
    },
    btnContainer : {
        marginBottom : 30,
        justifyContent:'center',
        alignItems : 'center',
        width : Dimensions.get('window').width,
        flexDirection :'row'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end"
    },
    btnSelected: {
        padding:15,
        backgroundColor : "white",
        borderRadius : 30,
        width : Dimensions.get('window').width/3,
        margin: 20
    },
    textSelected : {
        alignSelf:'center',
        color : '#b52924'
    },
    btnUnSelected: {
        padding:15,
        backgroundColor : "transparent",
        borderWidth : 1,
        borderColor: 'white',
        borderRadius : 30,
        width :  Dimensions.get('window').width/2 - 50,
        margin: 10
    },
    textUnSelected : {
        alignSelf:'center',
        color : '#ffffff'
    }
})

export default RegisterScreen