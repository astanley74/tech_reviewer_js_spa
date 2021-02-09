class ProductSerializer < ActiveModel::Serializer
    attributes :id, :name, :brand, :price, :avg_rating, :image_url
    has_many :reviews
end