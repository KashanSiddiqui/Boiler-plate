import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//     Link
//   } from 'react-router-dom';

class Dropdown extends Component {

    render() {
        return (
            <div>                
            <div className="input-field col s12">
            <select>
              <option value="">Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
          <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
          </div>
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
connect(mapStateToProp, null)(Dropdown);