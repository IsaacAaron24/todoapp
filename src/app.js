const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database"); // importamos la instancia db de database.js
const userRoutes = require('./Routes/users.routes.js') //importo las rutas del usuario
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 7000;
 
db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use("/api/v1", userRoutes);

app.listen(PORT, () => console.log("Servidor corriendo"));
