const carrito = [];
let carritoCount = 0;

function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito-container');
    const carritoCountElement = document.getElementById('carrito-count');
    carritoContainer.innerHTML = '';

    carritoCountElement.textContent = carritoCount;

    carrito.forEach((item, index) => {
        const carritoItem = document.createElement('li');
        carritoItem.innerHTML = `
            <img src="${item.src}" alt="${item.alt}" width="100">
            <span>${item.alt}</span>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(carritoItem);
    });
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    carritoCount = carrito.length;
    actualizarCarrito();
}

const images = document.querySelectorAll('.image img');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        carrito.push({ src: img.src, alt: img.alt });
        carritoCount++;
        actualizarCarrito();
    });
});

