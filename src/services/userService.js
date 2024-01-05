import { dateFilter } from "react-bootstrap-table2-filter";
import axios from "../axios";

const handleLoginAPI = (email, password) => {
    return axios.post('/api/login', { email, password })

}

const getAllUsers = (inputID) => {
    return axios.get(`/api/get-all-users?id=${inputID}`, { inputID })
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-users', data)
}

const deleteUser = (userId) => {
    return axios.delete('/api/delete-users', { data: { id: userId } })
}

const editUser = (inputData) => {
    return axios.put('/api/edit-users', inputData)
}
export { handleLoginAPI, getAllUsers, createNewUserService, deleteUser, editUser }