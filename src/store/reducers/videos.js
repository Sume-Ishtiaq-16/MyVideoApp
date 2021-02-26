import { GET_VIDEOS, ON_REFRESH } from '../actions/videos'

const initialState = {
    videos : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_VIDEOS : 
        return {
            ...state,
            videos : [...state.videos,...action.payload.videos]
        }
        case ON_REFRESH : 
        return{
            ...state,
            videos : action.payload.videos
        }
    }
    return state
}