import { ON_LOGIN, ON_SIGN_UP, ON_LOGOUT} from '../actions/user'

const initialState = {
    currentUser : {},
    isLogin : false,
    allUsers : [{email: 'celebfie@gmail.com', password: '123456'}]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ON_SIGN_UP: 
        return{
            ...state,
            currentUser : action.payload,
            isLogin : true,
            allUsers : [...state.allUsers,action.payload]
        }
        case ON_LOGIN : 
        const {email , password} = action.payload
        const res = state.allUsers.filter((user) => user.email ===email && user.password===password)
        if(res.length > 0){
            return {
                ...state,
                isLogin: true,
                currentUser : action.payload
            }
        }
        else alert("Either user or password is incorrect")
        return state
        case ON_LOGOUT : 
        return{
            ...state,
            currentUser : {},
            isLogin : false
        }
    }
    return state
}