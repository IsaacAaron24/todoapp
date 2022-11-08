const Address = require("./addresses.models");
const Users = require("./users.models");
const Tasks = require("./tasks.models");
const Categories = require("./categories.models");
const TaskCategories = require("./taskcategories.models");

const initModels = () => {
  TaskCategories;
  // 1 - 1 uno a uno one to one
  Address.belongsTo(Users, { as: "resident", foreignKey: "user_id" }); // una dirección pertenece a un usuario
  Users.hasOne(Address, { as: "home", foreignKey: "user_id" }); // users tiene una dirección
 
  // 1 - n one to many uno a muchos
  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" }); // un usuario tiene muchas tareas
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" }); // una tarea pertenece a un usuario

  // n - n muchos a muchos many to many
  // si no existe la tabla, pues crea una nueva tabla llamada task_categories
  // Tasks.belongsToMany(Categories, {
  //   through: "task_categories",
  //   foreignKey: "category_id",
  // });

  // Categories.belongsToMany(Tasks, {
  //   through: "task_categories",
  //   foreignKey: "task_id",
  // });

  // manejamos la relacion directamente con la tabla pivote

  // 1 - N ---> de tasks --> categories_tasks
  Tasks.hasMany(TaskCategories, { as: "categories", foreignKey: "task_id" });
  TaskCategories.belongsTo(Tasks, { as: "todo", foreignKey: "task_id" });

  // 1 - N ---> de categories --->  categories_tasks
  Categories.hasMany(TaskCategories, {
    as: "todos",
    foreignKey: "category_id",
  });
  TaskCategories.belongsTo(Categories, {
    as: "categories",
    foreignKey: "category_id",
  });

};

module.exports = initModels;
