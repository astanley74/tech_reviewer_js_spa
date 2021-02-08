class Api::V1::ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def create
        product = Product.create(product_params)
        render json: product
    end

private

    def product_params
        params.require(:product).permit(:name, :brand, :price, :image_url)
    end
end
