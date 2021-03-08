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
            const newProduct = new Product(product)
            newProduct.appendProduct()
        }))
    }

    static createProduct() {
        const newBtn = document.querySelector('#new-product-btn');
        const productForm = document.querySelector(".container");
        const form = document.querySelector(".new-product-form");

        Product.hideOrShowProductForm(newBtn, productForm)

        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            apiService.postProduct(event)
            .then(product => {
                if (product.message){
                    alert(product.message)
                }
                else { 
                    const newProduct = new Product(product)
                    newProduct.appendProduct()
                    form.reset()
                }
            })
        })
    }

    static hideOrShowProductForm(newBtn, productForm) {
        newBtn.addEventListener("click", () => {
            addProduct = !addProduct;
            if (addProduct) {
                productForm.style.display = "block";
            } else {
                productForm.style.display = "none";
            }
        });
    }

    appendProduct() {
        const productDiv = document.querySelector('#product-collection')
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'product')
        divCard.dataset.id = this.id

        const h1 = document.createElement('h1')
        h1.innerHTML = `${this.brand} ${this.name} ($${this.price})`

        const img = document.createElement('img')
        img.setAttribute('class', 'product-image')
        img.src = this.image_url

        const reviewDiv = document.createElement('div')
        reviewDiv.setAttribute('class', 'review')

        const h3 = document.createElement('h3')
        h3.innerHTML = "Product Reviews:"

        const addReviewBtn = document.createElement('button')
        addReviewBtn.setAttribute('class', 'add-review-button')
        addReviewBtn.innerHTML = "Add Review"

        reviewDiv.append(h3)

        divCard.append(img, h1, reviewDiv, addReviewBtn)
        productDiv.append(divCard)

        this.renderReviews(reviewDiv)

        Review.newReviewForm(divCard.dataset.id, reviewDiv, divCard)
    }

    renderReviews(reviewDiv) {
        if (this.reviews) {
            this.reviews.forEach(review => {
                const newReview = new Review(review)
                newReview.appendReview(reviewDiv)
            })
        }
    }
}