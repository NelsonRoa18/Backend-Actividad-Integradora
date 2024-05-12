import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config()
console.log(process.env.MONGO_URL);

const app = express()
const PORT = 8080


//Middleware para poder entender json en las solicitudes 
app.use(express.json())
//Para sacar parametros del enlace (endpoint) se usa esta linea de codigo
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log("Conectado a la base de datos") })
    .catch(error => (console.error("Error en la conexion", error);))