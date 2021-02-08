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
    h1.innerHTML = `${product.brand} ${product.name} ($${product.price})`

    let h2 = document.createElement('h2')
    h2.innerHTML = `Avg Rating: ${product.avg_rating}`

    let img = document.createElement('img')
    img.setAttribute('class', 'product-image')
    img.src = product.image_url

    divCard.append(h2, img, h1)
    productDiv.append(divCard)
}