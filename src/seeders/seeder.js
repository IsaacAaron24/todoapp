const db = require("../utils/database");
// los modelos donde vamos a plantar información
const Users = require("../models/users.models");
const Address = require("../models/addresses.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");

// arreglos con la información que se va a plantar
const users = [
  { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const addresses = [
  { street: "Buena Vista", number: 157, userId: 1 },
  { street: "benito Juarez", number: 57, userId: 2 },
  { street: "Madero", number: 157, userId: 3 },
];

const tasks = [
  {
    title: "Crear seeders",
    description: "Terminar el archivo para los seeders",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Darle la vuelta por todo el barrio a firulais",
    userId: 2,
  },
  {
    title: "Tomar dos litros de agua",
    userId: 3,
  },
];

const categories = [
  { name: "personal" },
  { name: "escuela" },
  { name: "salud" },
  { name: "trabajo" },
  { name: "hogar" },
  { name: "deporte" },
  { name: "ocio" },
  { name: "financiero" },
];

db.sync({ force: true })
  .then(async () => {
    console.log("Iniciando plantación");
    users.forEach((user) => Users.create(user));
  })
  .then(() => {
    categories.forEach((category) => Categories.create(category));
  })
  .then(() => {
    tasks.forEach((task) => Tasks.create(task));
  })
  .then(() => {
    addresses.forEach((address) => Address.create(address));
  });
