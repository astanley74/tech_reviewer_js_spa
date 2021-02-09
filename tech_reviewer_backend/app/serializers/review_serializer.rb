class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :user, :comment, :rating
    belongs_to :problem
end