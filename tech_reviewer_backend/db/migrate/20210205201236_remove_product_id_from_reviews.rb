class RemoveProductIdFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :product_id, :integer
  end
end
