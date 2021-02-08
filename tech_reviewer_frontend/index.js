function fetchProducts() {
    fetch('http://localhost:3000/api/v1/products')
    .then(response => response.json())
    .then(data => data.forEach(product => appendProduct(product)))
}

function appendProduct(product) {
    let productDiv = document.querySelector('#product-collection')
    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'product')
    let h1 = document.createElement('h1')
    h1.innerHTML = `${product.brand} ${product.name}`

    let img = document.createElement('img')
    img.setAttribute('class', 'product-image')
    img.src = product.image_url

    divCard.append(h1, img)
    productDiv.append(divCard)
}