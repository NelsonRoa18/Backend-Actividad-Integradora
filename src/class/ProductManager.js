import { promises as fs } from 'fs';
import productModel from '../models/product.model.js';

//const file = './data/productos.json'

class ProductManager {
    constructor() {
        //this.path = file
    }

    
/*     async addProduct(title, description, price, code) {
        try {
            //Primero leemos el archivo para obtener los items del json
            const products = await this.getProducts();
            //Genero el id autogenerable con el largo del array
            const product_id = products.length + 1;
            //Metodo para buscar 
            const findProduct = products.find((product) => product.id === product_id);

            if (!findProduct) {
                const prod = {
                    id: product_id,
                    code,
                    title,
                    description,
                    price
                }
                //Agregamos el item nuevo en el listado
                products.push(prod);
                //Escribimos en el archivo nuevamente
                await fs.writeFile(this.path, JSON.stringify(products, null, 2))

            } else {
                console.log("Error producto ya creado")
            }

        } catch (error) {
            console.error("Error al crear producto", error);
        }
    }

    async getProducts() {
        //Metodo para obtener todos los productos
        try {
            //Leo el archivo
            const data = await fs.readFile(this.path, 'utf-8')
            //Tengo que transformar lo que me devuelve (texto) en un objeto
            return JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
        }
    }

    async deleteProduct(idProduct) {
        try {
            //Traigo todos los items con el metodo getproducts
            const products = await this.getProducts()
            console.log(idProduct);
            const findProduct = products.find((product) => product.id === idProduct)

            if (!findProduct) {
                console.log("Error ID no encontrado")
            }else{
                //Borro de mi lista de productos el producto encontrado
                products.pop(findProduct);
                //Guardo el listado modificado, lo transformo en JSON
                const productsUpdate = JSON.stringify(products, null, 2)
                //Escribo nuevamente en mi archivo JSON
                await fs.writeFile(this.path, productsUpdate)
                console.log("Elemento borrado con exito")
            }
        } catch (error) {
            console.error("Error no se pudo borrar el item", error);
        }
    } */

    async addProduct(data) {
        try {
            //Desestructuramos el objeto
            let { title, description, price, thumbnail, code, status, stock } = data
            //Consulto que esten todos los datos cargados
            if (!title || !description || !price || !thumbnail || !code || !status || !stock) {
                console.log({ status: "error", error: "Faltan parametros" })
            }
            //Uso el metodo create para agregar cada uno de los campos de la collection
            let result = await productModel.create({ title, description, price, thumbnail, code, status, stock })

            //Retorno el result para que finalice la funcion
            
            return result

        }

        catch (error) {
            console.error("Error al crear producto", error);
        }
    }

    async getProducts() {
        //Metodo para obtener todos los productos
        try {
            //Leo el archivo
            const data = await productModel.find().lean()
            //Tengo que transformar lo que me devuelve (texto) en un objeto
            return data
        } catch (error) {
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
        }
    }

    async deleteProduct(idProduct) {
        try {

            //Comparamos el _id de la base de datos con el id de nuestro producto
            let result = await productModel.deleteOne({ _id: idProduct })

            console.log("Elemento borrado con exito")

            return result           
            
        } catch (error) {
            console.error("Error no se pudo borrar el item", error);
        }
    }

    async updateProduct(idProduct, updateData) {
        try {
            let { title, description, price, thumbnail, code, status, stock } = updateData
            //Comparamos el _id de la base de datos con el id de nuestro producto
            let result = await productModel.updateOne({_id:idProduct}, title, description, price, thumbnail, code, status, stock)
        } catch (error) {
            
        }
    }
}

export default ProductManager