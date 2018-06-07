import React from 'react';
import { connect } from 'react-redux';
import {
  Router,
  Route
} from 'react-router-dom';
import CustomNavbar from '../components/navbar'
import Signin from '../components/signin'
import Signup from '../components/signup';
import Home from '../components/home';
import history from '../history';
import Landlord from '../components/landlord';
import Tenant from '../components/tenant';
import Dropdown from '../components/Dropdown'

const BasicRouting = (props) => {
  return ( 
    <Router history={history}>
    <div>
        <CustomNavbar />
        {
          (!(props.isLogin)) ? 
          (
            <div>

            <Route exact path="/" component={Landlord} />
            <Route path="/signin" component={Landlord} />

            </div>

          ) :
          (
            <div>
              {(props.type === 'Tenant')? 
              ( <Route path="/tenant" component={Tenant} /> ) : 
              ( null ) 
            }
            {(props.type === 'Landlord')? 
              ( <Route path="/landlord" component={Landlord} /> ) : 
              ( null ) 
            }
            </div>
          )
        }
        </div>
    </Router>
  )
}

function mapStateToProp(state) {
  return ({
    isLogin : state.root.isLogin,
    type : state.root.type
  })
}

export default connect(mapStateToProp, null)(BasicRouting);