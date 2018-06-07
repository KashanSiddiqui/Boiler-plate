import firebase from 'firebase';
import history from '../../history';


export function signinAction(user) {
    console.log(user)
    return dispatch => {
        dispatch({ type: "ERROR_MESSAGE", payload: '' })
        dispatch({ type: "SHOW_PROGRESS_BAR", payload: true })
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                let type;
                firebase.database().ref('users/' + signedinUser.uid).once('value', (snapshot) => {
                    type = snapshot.val().type;
                    dispatch({ type: 'USER', payload: snapshot.val()})
                    dispatch({ type: 'TYPE', payload : snapshot.val().type })
                    dispatch({ type: "CURRENT_USER_UID", payload: signedinUser.uid })
                dispatch({ type: "IS_LOGIN", payload: true })
                switch(type){
                    
                    case 'Landlord':
                    history.push('/landlord');
                    break;
                    case 'Tenant':
                    history.push('/tenant');
                    break;
                }
                })
                
            })
            .catch((err) => {
                dispatch({ type: "SHOW_PROGRESS_BAR", payload: false })
                dispatch({ type: "ERROR_MESSAGE", payload: err.message })
            })
    }
}


export function signupAction(user) {
    return dispatch => {
        dispatch({ type: "ERROR_MESSAGE", payload: '' })
        dispatch({ type: "SHOW_PROGRESS_BAR", payload: true })
        dispatch({ type: 'USER_NAME', payload: user.firstName })
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                console.log('type', user.type);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        dispatch({ type: 'USER', payload: user})
                        dispatch({ type: 'CURRENT_USER_UID', payload: createdUser.uid })
                        dispatch({ type: "IS_LOGIN", payload: true })
                        dispatch({ type: "TYPE", payload: user.type })
                        switch(user.type){
                            case 'Landlord':
                            history.push('/landlord');
                            break;
                            case 'tenant':
                            history.push('/Tenant');
                            break;
                        }
                    })
            })
            .catch((err) => {
                dispatch({ type: "SHOW_PROGRESS_BAR", payload: false })
                dispatch({ type: "ERROR_MESSAGE", payload: err.message })
                console.log(err)
            })
    }
}

// logout fn
export function logout() {
    return dispatch => {
        firebase.auth().signOut().then(function () {
            dispatch({ type: "SHOW_PROGRESS_BAR", payload: false })
            dispatch({ type: "IS_LOGIN", payload: false })
            // Sign-out successful.
            history.push('/signin');
        }, function (error) {
            // An error happened.
        });
    }
    
}



export function errorMessage(msg) {
    return dispatch => {
        dispatch({ type: 'ERROR_MESSAGE', payload: msg })
    }
}