import mongoose from "mongoose";

//Nombre de la nueva coleccion de la base de datos
const cartsCollection = "Carts";

const cartsSchema = new mongoose.Schema({
    products:{type:Array, required:True}
})


const cartModel = mongoose.model(cartsCollection, cartsSchema)

export default cartModel