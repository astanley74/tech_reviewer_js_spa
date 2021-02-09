let addProduct = false;

document.addEventListener("DOMContentLoaded", function(){
    Product.fetchProducts()
    Product.createProduct()
})

class Product {
    constructor(product){
        this.id = product.id
        this.name = product.name
        this.brand = product.brand
        this.price = product.price
        this.avg_rating = product.avg_rating
        this.image_url = product.image_url
    }

    static fetchProducts() {
        fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(data => data.forEach(product => {
            // debugger;
            let newProduct = new Product(product)
            newProduct.appendProduct()
        }))
    }

    static createProduct() {
        const newBtn = document.querySelector('#new-product-btn');
        const productForm = document.querySelector(".container");
        const form = document.querySelector(".new-product-form");

        newBtn.addEventListener("click", () => {
            addProduct = !addProduct;
            if (addProduct) {
                productForm.style.display = "block";
                productForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    fetch('http://localhost:3000/api/v1/products', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                
                        body: JSON.stringify({
                            name: event.target.name.value,
                            brand: event.target.brand.value,
                            price: event.target.price.value,
                            image_url: event.target.image.value
                        })
                    })
                    .then(response => response.json())
                    .then(product => {
                        let newProduct = new Product(product)
                        newProduct.appendProduct()
                        form.reset()
                    })
                })
            } else {
                productForm.style.display = "none";
            }
        });
    }

    appendProduct() {
        if (this.message) {
            alert(this.message)
        } else {
            let productDiv = document.querySelector('#product-collection')
            let divCard = document.createElement('div')
            divCard.setAttribute('class', 'product')
    
            let h1 = document.createElement('h1')
            h1.innerHTML = `${this.brand} ${this.name} ($${this.price})`
    
            let h2 = document.createElement('h2')
            h2.innerHTML = `Avg Rating: ${this.avg_rating}`
    
            let img = document.createElement('img')
            img.setAttribute('class', 'product-image')
            img.src = this.image_url
    
            divCard.append(h2, img, h1)
            productDiv.append(divCard)
    
        }
    }
}