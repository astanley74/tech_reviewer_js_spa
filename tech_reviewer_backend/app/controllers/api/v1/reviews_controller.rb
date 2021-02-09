class Api::V1::ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create(review_params)
        render json: review
    end

private

    def review_params
        params.require(:review).permit(:user, :comment, :rating, :product_id)
    end
end