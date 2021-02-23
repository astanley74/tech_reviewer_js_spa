class ApiService {
    constructor() {
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    findProducts() {
        return fetch(`${this.baseUrl}/products`)
        .then(response => response.json())
    }

    postProduct(event) {
        return fetch('http://localhost:3000/api/v1/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
    
            body: JSON.stringify({
                name: event.target.name.value,
                brand: event.target.brand.value,
                price: event.target.price.value,
                avg_rating: undefined,
                image_url: event.target.image.value
            })
        })
        .then(response => response.json())
    }

}