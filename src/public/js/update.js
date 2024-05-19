socket = io()


const btnSend = document.getElementById('btn-send-update')
const btnVolver = document.getElementById('btn-back')


btnSend.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const thumbnail = document.getElementById('thumbnail').value;
    const code = document.getElementById('code').value;
    const stock = document.getElementById('stock').value;
    const statusChecked = document.getElementById('status');
    const status = statusChecked.checked;

    socket.emit('updateProduct',{ title, description, price, thumbnail, code, stock, status } );

    console.log('botontocado');
})

btnVolver.addEventListener('click', () => {
    socket.emit('realTimeProducts', {url:'/realTimeProducts'})
})

socket.on('redirect', (data) => {
    console.log(data);
    window.location.href = data.url;
}) 