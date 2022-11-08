const { Router } = require("express");
const { 
    getAllUsers, 
    getUserById,
    getUserWithAddres,
    getUserWithTasks,
    createUser,
    updateUser,
} = require("../Controllers/users.controllers");

 
const router = Router();

// para obtener a todos los usuarios

router.get("/users", getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:id/address', getUserWithAddres);

router.get('/users/:id/tasks', getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

module.exports = router;