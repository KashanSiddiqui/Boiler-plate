const INITIAL_STATE = {
    userName: '',
    userID: '',
    isLogin : false,
    progressBarDisplay : false,
    type: '',
    errorMessage : ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_NAME':
        return({
            ...state,
            userName : action.payload
        })
        case 'CURRENT_USER_UID':
            return ({
                ...state,
                userID: action.payload
            })
            case 'IS_LOGIN':
            return ({
                ...state,
                isLogin : action.payload
            })
            case 'SHOW_PROGRESS_BAR':
            return ({
                ...state,
                progressBarDisplay : action.payload
            })
            case 'ERROR_MESSAGE':
            return({
                ...state,
                errorMessage : action.payload
            })
            case 'TYPE':
            { console.log(action.payload) }
            return ({
              ...state,
                type: action.payload
            })
        default:
            return state;
    }

}