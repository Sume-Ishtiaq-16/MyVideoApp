import React,{useEffect, useState} from 'react'
import {Text, StyleSheet, FlatList, RefreshControl, Image, TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import * as videosAction from '../store/actions/videos'
import * as userActions from '../store/actions/user'
import {VideoItem} from '../components/common'

const VideoListScreen = props => {

    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos.videos)
    const [videolist, setVideolist] = useState([])
    const [isRefreshing, setRefreshing] = useState(false)
    const [page, setPage] = useState(0)

    const getVideos = (type) => {
        dispatch(videosAction.onGetVideos({type:type}))
    }

    const onLogout = () => {
        dispatch(userActions.onLogout())
    }

    useEffect(() => {
        if(videos.length <1){
            getVideos(videosAction.GET_VIDEOS)
        }
        setVideolist(videos)
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onLogout}>
                    <Image source={require('../assets/logout.png')} style={styles.logout} />
                </TouchableOpacity>
               
            )
        })
    },[videos])

    const onVideoClick = (video) => {
        props.navigation.navigate('VideoDetail',{video:video})
    }

    const onRefresh = () => {
        setRefreshing(true)
        getVideos(videosAction.ON_REFRESH)
        setRefreshing(false)
        setPage(0)
    }

    const onEndReached = () => {
        getVideos(videosAction.GET_VIDEOS)
    }

    return(
        <FlatList 
            style={styles.list}
            data = {videolist}
            keyExtractor = {(item, index) => item.title + "pps"}
            numColumns = {2}
            refreshControl={
                <RefreshControl
                 refreshing={isRefreshing}
                 onRefresh={onRefresh}
                />
              }
              onEndReached = {onEndReached}
            renderItem = {(data) => (
                <VideoItem onVideoClick={onVideoClick} video = {data.item} />
                )
            }
        />
        
    )
}

export const videoListScreenOptions = navData => {
    return {
        headerTitle : "Video List",
        headerTintColor : "#b52924",
    }
}

const styles = StyleSheet.create({
list : {
    flex:1,
    padding:5,
    marginTop : 10,
    // backgroundColor:'red'
},
logout: {
     width:23,
     height:23,
     marginHorizontal:10
}
})

export default VideoListScreen