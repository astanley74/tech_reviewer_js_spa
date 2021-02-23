class ApiService {
    constructor() {
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    findProducts() {
        return fetch(`${this.baseUrl}/products`)
        .then(response => response.json())
    }

}