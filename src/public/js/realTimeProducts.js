socket = io()

const listProducts = document.getElementById('productsRealTime')

const btnSend = document.getElementById('btn-send')

btnSend.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const thumbnail = document.getElementById('thumbnail').value;
    const code = document.getElementById('code').value;
    const stock = document.getElementById('stock').value;
    const status = document.getElementById('status');
    status.checked = true;
    socket.emit('addProduct', { title, description, price,thumbnail, code, stock, status});

})

socket.on('productsRealTime', products => {
    listProducts.innerHTML = ``;
    console.log(products);
    products.forEach(product => {
  
        const newProduct = document.createElement('li');
        //const btnUpdate = document.createElement('button')
        const btnDelete = document.createElement('button');

        btnDelete.innerHTML = 'Eliminar';
        btnDelete.addEventListener('click', () => {
            socket.emit('deleteProduct', product._id)
            console.log(product._id);
        });
/*         btnUpdate.innerHTML = "Modificar";
        btnUpdate.addEventListener('click',() => {
            socket.emit('idProductToUpdate', product.id)
            console.log(product.id);
            socket.emit('updateProductPage', {url:'/update'})
            
        }); */
        newProduct.innerHTML = `<strong>Title: </strong>${product.title}, <strong>Description: </strong>${product.description},
        <strong>Price: </strong>${product.price}, <strong>Code: </strong>${product.code},
        `;
        listProducts.appendChild(newProduct);
        listProducts.appendChild(btnDelete);
        //listProducts.appendChild(btnUpdate)
    });
})

socket.on('redirect', (data) => {
    console.log(data.id);
    window.location.href = data.url;
    

}) 