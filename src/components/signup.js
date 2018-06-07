import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction, errorMessage } from '../store/actions/action';
import {
    Link
} from 'react-router-dom';
import { Col, ProgressBar, Row, Input, Button } from 'react-materialize';
// import { DropdownButton, i, MenuItem} from 'react-bootstrap'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            type: ''
        }
        this.signup = this.signup.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this._onChangLastName = this._onChangLastName.bind(this);
        this._onChangeType = this._onChangeType.bind(this);
    }

    signup(event) {
        event.preventDefault();
        if ((this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '')) {
            this.props.errorMessage('All the fields are required!');
        }
        else {
            let user = {
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                type: this.state.type
            }
            this.props.signupwithEmailPassword(user);
        }
    }

    _onChangeEmail(event) {
        this.props.errorMessage('');
        this.setState({
            email: event.target.value
        })
    }
    _onChangeType(ev) {
        console.log(ev.target.value);
        this.setState({
            type: ev.target.value
        })
    }
    _onChangeUserName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    _onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    _onChangLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    componentWillMount() {
        this.props.errorMessage('');
    }
    render() {
        return (
            <Row>
                <Col s={3}>
                <div className="input-field col s12">
    <select>
      <option value="">Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>
</Col>
                <Col s={6} style={{ height: '680px', border: '1px solid gray', borderTop: 'none' }}>
                    <h1>Signup</h1>
                    <form onSubmit={this.signup.bind(this)}>
                        <Input s={6} name='firstname' value={this.state.firstName} onChange={this._onChangeUserName} label="first Name" />
                        <Input s={6} label="Last Name" name='lastname' value={this.state.lastName} onChange={this._onChangLastName} />
                        <br />
                        <Input label='email' s={12} type='text' name='email' value={this.state.email} title='type email here' onChange={this._onChangeEmail} />
                        <br />
                        <Input label='password' s={12} type='password' name='password' title='type password here' value={this.state.password} onChange={this._onChangePassword} />
                        <br />
                        <Row>
                        
                        </Row>
                        
                        {/* <Row>
  <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
    <option value='1'>Option 1</option>
    <option value='2'>Option 2</option>
    <option value='3'>Option 3</option>
  </Input>
</Row> */}
                            {/* <Input s={6} type='select' label="Login As" defaultValue='Tenant' onChange={this._onChangeType}>
                                <option value='Tenant'>Tenant</option>
                                <option value='Landlord'>Landlord</option>
                            </Input> */}
                        <br />
                        <Button className="btn waves-effect waves-light" type="submit" name="action" title='signup' style={{ display: 'block' }}>Signup</Button>
                        <Link to='/signin'>Already have an account?</Link>
                        <div><p style={{ color: "red" }}>{this.props.errorMsg}</p></div>
                    </form>
                    {
                        (this.props.progressBarDisplay) ? (
                            <Col s={12}>
                                <ProgressBar />
                            </Col>
                        ) :
                            <div></div>
                    }
                </Col>

                <Col s={3}></Col>
            </Row>
        )
    }
}

function mapStateToProp(state) {
    return ({
        progressBarDisplay: state.root.progressBarDisplay,
        errorMsg: state.root.errorMessage
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        signupwithEmailPassword: (userDetails) => {
            dispatch(signupAction(userDetails));
        },
        errorMessage: (message) => {
            dispatch(errorMessage(message));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);