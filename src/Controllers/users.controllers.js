const UserServices = require('../Services/users.services');

// controlador para obtener todos los usuarios

const getAllUsers = async(req, res) => {
    try {
        const result = await UserServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
}

const getUserWithAddres = async(req, res) => {
    try {
        const { id } = req.params
        const result = await UserServices.getUserJoinAddress(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const getUserWithTasks = async(req, res) => {
    try {
        const { id } = req.params
        const result = await UserServices.getUserJoinTasks(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const createUser = async(req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.add(newUser);
        res.status(201).json(result)
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        const dataUpdate = req.body;
        const result = await UserServices.update(dataUpdate, id);
        res.status(200).json(result); 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithAddres,
    getUserWithTasks,
    createUser,
    updateUser,
};