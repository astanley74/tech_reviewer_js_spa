let addProduct = false

class Product {
    constructor(product){
        this.id = product.id
        this.name = product.name
        this.brand = product.brand
        this.price = product.price
        this.avg_rating = product.avg_rating
        this.image_url = product.image_url
        this.reviews = product.reviews
    }

    static fetchProducts() {
        apiService.findProducts()
        .then(products => products.forEach(product => {
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
                    apiService.postProduct(event)
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
        let productDiv = document.querySelector('#product-collection')
        let divCard = document.createElement('div')
        divCard.setAttribute('class', 'product')
        divCard.dataset.id = this.id

        let h1 = document.createElement('h1')
        h1.innerHTML = `${this.brand} ${this.name} ($${this.price})`

        // let h2 = document.createElement('h2')
        // h2.innerHTML = `Avg Rating: ${this.avg_rating}`

        let img = document.createElement('img')
        img.setAttribute('class', 'product-image')
        img.src = this.image_url

        let reviewDiv = document.createElement('div')
        reviewDiv.setAttribute('class', 'review')

        let h3 = document.createElement('h3')
        h3.innerHTML = "Product Reviews:"

        let addReviewBtn = document.createElement('button')
        addReviewBtn.innerHTML = "Add Review"
        addReviewBtn.addEventListener('click', function(){
            let formDiv = document.createElement('div')
            formDiv.setAttribute('class', 'review-form')
            divCard.append(formDiv)
            Review.createReview(divCard.dataset.id, reviewDiv)
        })

        reviewDiv.append(h3)

        divCard.append(img, h1, reviewDiv, addReviewBtn)
        productDiv.append(divCard)

        this.renderReviews(reviewDiv)
    }

    renderReviews(reviewDiv) {
        if (this.reviews) {
            this.reviews.forEach(review => {
                let newReview = new Review(review)
                newReview.appendReview(reviewDiv)
            })
        }
    }
}