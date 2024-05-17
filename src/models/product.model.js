import mongoose from "mongoose";

//Nombre de la nueva coleccion de la base de datos

const productCollection =  "Productos";

const productSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    thumbnail: {type:String, required:true},
    code:{type:String, required:true},
    status:{type:Boolean, required:true},
    stock:{type:Number, required:true}
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel