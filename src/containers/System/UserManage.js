import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUser, editUser } from '../../services/userService'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenEditModalUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)

            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                // emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (error) {
            console.log(error)
        }
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })

        }
    }

    handleDeleteUser = async (user) => {
        console.log(user)
        try {
            let res = await deleteUser(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    handeleUpdateUser = (user) => {
        this.setState({
            isOpenEditModalUser: true,
            userEdit: user
        })
    }

    toggleUseModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleEditUseModal = () => {
        this.setState({
            isOpenEditModalUser: !this.state.isOpenEditModalUser
        })
    }
    /** life cycle
     * Run component :
     * 1 Runconstruct -> init state
     * 2 Did mount (set state)
     * 3 render
     */

    doEditUser = async (user) => {

        try {
            let res = await editUser(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenEditModalUser: false
                })
                await this.getAllUsersFromReact();
            } else {
                alert(res.errCode)
            }
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        let arrUsers = this.state.arrUsers;
        //properties , nested
        return (
            <div className="User-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUseModal}
                    createNewUser={this.createNewUser}
                />{
                    this.state.isOpenEditModalUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditModalUser}
                        toggleFromParent={this.toggleEditUseModal}
                        editUser={this.doEditUser}
                        currentUser={this.state.userEdit}
                    />
                }

                <div className='title text-center'>Manage User With MK</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-plus"> Add new user</i></button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>

                            </tr>

                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr>

                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit' onClick={() => this.handeleUpdateUser(item)}><i class="fas fa-pencil-alt"></i></button>
                                                <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i class="fas fa-trash"></i></button>
                                            </td>


                                        </tr>

                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
