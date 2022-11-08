const Address = require('../models/addresses.models');
const Categories = require('../models/categories.models');
const TaskCategories = require('../models/taskcategories.models');
const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models');

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: ['id', 'username', 'email']
            }); // es equivalente a un SELECT * FROM users
            return result
        } catch (error) {
            throw (error)
        }
    };

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "username", "email"],
            });
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async getUserJoinAddress(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: [
                    'id', 
                    'username',
                ], // --> de esta forma incluyo columnas
                include: {
                    model: Address,
                    as: "home",
                    attributes: {
                        exclude: [
                            'id',
                            'userId',
                            'user_id',
                        ]
                    } // --> de esta forma excluyo columnas
                },
            });
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async getUserJoinTasks(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: [
                    'username',
                ],
                // primer include donde conectamos users con tasks
                include: {
                    model: Tasks,
                    as: "todo",
                    attributes: {
                        exclude: [
                            'id',
                            'userId',
                            'createdAt',
                            'updatedAt',
                            'user_id'
                        ]
                    },
                    // segundo include donde conectamos tasks con mi tabla pibote
                    include: {
                        model: TaskCategories,
                        as: "categories",
                        attributes: [
                            "category_id",
                        ],
                        include: {
                            model: Categories,
                            as: "categories",
                            attributes: [
                                "name",
                                "createdAt"
                            ]
                        }
                    }
                },
            })
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async add(newUser) {
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw(error);
        }
    }  

    static async update(updateData, id) {
        try {
            const result = await UserServices.update(updateData, {
                where: {id},
            })
            return result
        } catch (error) {
            throw(error);
        }
    }
};

module.exports = UserServices; 