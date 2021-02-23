const apiService = new ApiService()

document.addEventListener("DOMContentLoaded", function(){
    Product.fetchProducts()
    Product.createProduct()
})
