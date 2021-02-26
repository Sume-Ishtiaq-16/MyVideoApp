export const GET_VIDEOS = "GET_VIDEOS"
export const ON_REFRESH = "ON_REFRESH"
import axios from 'axios'

export const onGetVideos = (params) => {
    return (
        async dispatch => {
            var res = await axios.get("https://5f099db1445d0800166921ba.mockapi.io/api/v1/videos",{
                headers : {
                    "Content-Type" : 'application/json'
                }
            })
            console.log("response ===",res.data)
            dispatch({type:params.type, payload : res.data})
        }
    )
}