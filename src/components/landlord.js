import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Row, Tab, Tabs, Button, CollapsibleItem, Collapsible } from 'react-materialize'
// import {
//     Link
//   } from 'react-router-dom';

class Landlord extends Component {
    submit(event){
        // console.log( this.refs.cgpa.state.value, this.refs.cgpa.value)
        // console.log( this.refs.number.state.value, this.refs.number.value)
        // console.log( this.refs.field.state.value, this.refs.field.value)
        // console.log( this.refs.cgpa.state.value)
        event.preventDefault();
        if(   this.refs.number.state.value === undefined || this.refs.field.state.value === undefined || this.refs.experience.state.value === undefined)
        {
            alert("all the fields are required");
        }
        else{
            let CompanyInfo = {
                firstName : this.props.user.firstName,
                lastName : this.props.user.lastName,
                
                
                number : this.refs.number.state.value,
                field : this.refs.field.state.value,
                exp : this.refs.experience.state.value
            }
            console.log(CompanyInfo);
            // this.props.showNotification();
            
        }
    }

    render() {
        return (
            <div>
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="Students Data">
                        <div>
                            
                        </div>
                    </Tab>
                    <Tab title="Submit Add" ><form onSubmit = {this.submit.bind(this)}>
                        <Input s={6} label="First Name" defaultValue={this.props.user.firstName} disabled />
                        <Input s={6} label="Last Name" defaultValue={this.props.user.lastName} disabled />
                        <Input label="Field of job" ref="field" s={6} />
                        <Input type="number" s={6} label="Company Contact" ref="number"/>
                        <Input s={6} label="Experience Required" ref="experience"/>
                        <Button className="btn waves-effect waves-light" type="submit" name="action" title = 'submit' style = {{display : 'block'}}>Submit</Button>

                    </form></Tab>

                </Tabs>
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
connect(mapStateToProp, null)(Landlord);