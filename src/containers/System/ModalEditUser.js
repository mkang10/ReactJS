import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { every } from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }
    componentDidMount() {
        let user = this.props.currentUser;
        // let { currentUser } = this.props;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'jas',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
        console.log(user)
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api
            this.props.editUser(this.state);

        }


    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter' + arrInput[i]);
                break;
            }

        }
        return isValid;
    }

    handleOnchangeInput = (event, id) => {
        //bad code modify state
        // this.state ={
        //     email: '',
        //     password: '',

        // }
        // this.state.email === this.state['email']
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state', this.state)
        // })
        // console.log(event.target.value, id)

        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }
    render() {

        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className='modal-user-container' size='lg' >
                <ModalHeader toggle={() => { this.toggle() }}>Edit a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>email</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "email") }} value={this.state.email} disabled>

                            </input>
                        </div>
                        <div className='input-container'>
                            <label>password</label>
                            <input type='password' onChange={(event) => { this.handleOnchangeInput(event, "password") }} value={this.state.password} disabled>

                            </input>
                        </div>
                        <div className='input-container'>
                            <label>firstName</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "firstName") }} value={this.state.firstName}>

                            </input>
                        </div>
                        <div className='input-container'>
                            <label>lastName</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "lastName") }} value={this.state.lastName}>

                            </input>
                        </div>
                        <div className='input-container max-width-input'>
                            <label>address</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "address") }} value={this.state.address}>

                            </input>
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


