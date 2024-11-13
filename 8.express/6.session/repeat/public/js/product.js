document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
});

function loadProduct() {
    fetch('/api/products')
        .then((response) => response.json())
        .then((data) => displayProducts(data));
};

function displayProducts(data) {
    const productTableBody = document.querySelector('#productTable tbody');

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><button class="add-to-cart-btn" data-product-id="${item.id}">담기</button></td>
        `

        productTableBody.appendChild(row);
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            addToCart(productId);
        });
    })
};

function addToCart(productId) {
    fetch('/api/cart')
        .then((response) => response.json())
};