class ApiService {
    constructor() {
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    findProducts() {
        return fetch(`${this.baseUrl}/products`)
        .then(response => response.json())
    }

    postProduct(event) {
        return fetch(`${this.baseUrl}/products`, {
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
    }

    postReview(event, product_id) {
        return fetch(`${this.baseUrl}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
    
            body: JSON.stringify({
                user: event.target.user.value,
                comment: event.target.comment.value,
                rating: event.target.rating.value,
                product_id: product_id
            })
        })
        .then(response => response.json())
    }

    removeReview(event) {
        const id = event.target.parentElement.parentElement.dataset.id
        fetch(`${this.baseUrl}/reviews/${id}`, {
            method: "DELETE"
        })
    }
    
}