import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native'

export const Header = props => {

    const onBackPress = () => {
        props.navigation.goBack()
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
                <Image style={styles.headerIcon} source = {require('../assets/back.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <View></View>
        </View>
    )
}

export const VideoItem = props => {
        return(
            <TouchableOpacity style={styles.video} onPress={() => props.onVideoClick(props.video)}>
                <Image style={styles.videoImage} source = {{uri:props.video.thumbnail_url}} />
                <Text style={styles.videoTitle}>{props.video.title}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    videoImage : {
        width:(Dimensions.get('screen').width - 30)/2,
        height:100,
        resizeMode:'cover',
        borderTopStartRadius :10,
        borderTopEndRadius:10
    },
    videoTitle:{
        padding:10,
        fontSize : 16
    },
    container : {
        top:40,
        position:'absolute',
        padding : 10,
       // backgroundColor : 'tra',
        width:'100%',
        flexDirection : 'row',
       justifyContent : 'space-between'
    },
    headerIcon : {
        width: 25,
        height : 25,
        resizeMode : 'contain'
    },
    iconContainer : {
        width: 25,
        height : 25,
    },
    title:{
        color:'white',
        fontSize : 18,
        fontWeight:'800'
    },
    video : {
        margin:5,
        overflow:'hidden',
        //backgroundColor: 'white',
        width:( Dimensions.get('screen').width - 30)/2,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        elevation: 5,
        // padding: 15,
    }
})