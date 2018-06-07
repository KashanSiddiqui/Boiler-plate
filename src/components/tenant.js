import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//     Link
//   } from 'react-router-dom';

class Tenant extends Component {

    render() {
        return (
            <div>tenant</div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state)
    return ({
        isLogin : state.root.isLogin
    })
}


// function mapDispatchToProp(dispatch) {
//     return ({
//         logoutUser: () => {
//             dispatch(logout())
//         }
//     })
// }

export default 
connect(mapStateToProp, null)(Tenant);