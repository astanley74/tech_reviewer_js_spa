# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Review.destroy_all

macbook_air = Product.create(name: "Macbook Air", brand: "Apple", price: 999, avg_rating: 4.3, image_url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000")
iphone = Product.create(name: "iPhone 12", brand: "Apple", price: 799, avg_rating: 5.0, image_url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000")

Review.create(user: "Tom Allen", comment: "This is a great laptop for people in any industry. I am a student at Ohio State and it works great for me", rating: 5.0, product_id: macbook_air.id)
Review.create(user: "Ryan Day", comment: "Great Laptop for anyone in the software engineering field.", rating: 5.0, product_id: macbook_air.id)

Review.create(user: "Zach Stanley", comment: "Amazing Laptop", rating: 5.0, product_id: iphone.id)
Review.create(user: "Caleb Stanley", comment: "Perfect Laptop", rating: 5.0, product_id: iphone.id)