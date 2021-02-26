import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import Video from 'react-native-af-video-player'

const VideoDetailScreen = props => {
    return(
        <View style={styles.container}>
        <Video url={props.route.params.video.video_url} />
      </View>
    )
}

export const videoScreenOptions = navData => {
    return {
        headerTitle : "",
        headerTintColor : "white",
        headerStyle : {
            backgroundColor : "black"
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
        justifyContent: 'center'
      }
})

export default VideoDetailScreen