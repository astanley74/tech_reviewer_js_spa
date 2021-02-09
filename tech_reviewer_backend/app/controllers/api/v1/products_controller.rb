class Api::V1::ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def create
        if Product.find_by(:name => product_params[:name])
            render json: {message: "Product has already been created"}
        else
            product = Product.create(product_params)
            render json: product
        end
    end

private

    def product_params
        params.require(:product).permit(:name, :brand, :price, :image_url)
    end
end
