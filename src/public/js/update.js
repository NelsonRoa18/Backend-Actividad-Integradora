socket = io()


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
    socket.emit('updateProduct', { title, description, price,thumbnail, code, stock, status});

})