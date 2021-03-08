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
ipad = Product.create(name: "iPad Pro", brand: "Apple", price: 999, avg_rating: 5.0, image_url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156")

sonyWH = Product.create(name: "WH-1000XM3 Wireless Noise-Canceling Headphones", brand: "Sony", price: 349, avg_rating: 5.0, image_url: "https://www.sony.com/image/eb0062b3db03748efc7f5ca3fd82ccc5?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF")
ps5 = Product.create(name: "PlayStation 5", brand: "Sony", price: 499, avg_rating: 5.0, image_url: "https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SX342_.jpg")
xperia = Product.create(name: "Xperia 1 II", brand: "Sony", price: 1199, avg_rating: 5.0, image_url: "https://www.sony.com/image/93375262915162c04b81617da973a2c4?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF")

Review.create(user: "Colby Allen", comment: "This is a great laptop for people in any industry. I am a student at Ohio State and it works great for me", rating: 5.0, product_id: macbook_air.id)
Review.create(user: "John Newman", comment: "Great Laptop for anyone in the software engineering field.", rating: 5.0, product_id: macbook_air.id)

Review.create(user: "Chris Olson", comment: "One of the best phones I have ever had! definitely recommend.", rating: 5.0, product_id: iphone.id)
Review.create(user: "Lance Richards", comment: "Great phone. The touch screen is very responsive and there are so many things you can do with it.", rating: 5.0, product_id: iphone.id)