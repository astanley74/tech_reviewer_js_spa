class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.integer :price
      t.float :avg_rating
      t.string :image_url

      t.timestamps
    end
  end
end
