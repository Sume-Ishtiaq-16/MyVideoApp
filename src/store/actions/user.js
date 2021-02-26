export const ON_SIGN_UP = "ON_SIGN_UP"
export const ON_LOGIN = "ON_LOGIN"
export const ON_LOGOUT = "ON_LOGOUT"

export const onSignUp = (params) => {
    return ({type: ON_SIGN_UP, payload: params})
}

export const onLogin = (params) => {
    return ({type:ON_LOGIN, payload: params})
}

export const onLogout = (params) => {
    return ({type:ON_LOGOUT, payload: {}})
}

// export const onLogin = (params) => {
//     return async dispatch => {
//         const res = await call
//         dispatch({type:ON_LOGIN, payload: params})
//     }
// }