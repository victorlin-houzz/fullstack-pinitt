# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pin.destroy_all
Board.destroy_all
User.destroy_all

User.create!(username: "george",password: "password")
User.create!(username: "mary",password: "password")
User.create!(username: "guest",password: "password")



Board.create!(title: "Board1", description: "Des1", user_id: 1)
Board.create!(title: "Board2", description: "Des2", user_id: 1)
Board.create!(title: "Board3", description: "Des3", user_id: 1)
Board.create!(title: "Board4", description: "Des4", user_id: 1)
Board.create!(title: "Board5", description: "Des5", user_id: 1)
Board.create!(title: "Board6", description: "Des6", user_id: 2)
Board.create!(title: "Board7", description: "Des7", user_id: 2)
Board.create!(title: "Board8", description: "Des8", user_id: 2)
Board.create!(title: "Board9", description: "Des9", user_id: 2)
Board.create!(title: "Board10", description: "Des10", user_id: 2)



Pin.create!(title: "Pin1", description: "Des1", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 1)
Pin.create!(title: "Pin2", description: "Des2", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 1)
Pin.create!(title: "Pin3", description: "Des3", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 1)
Pin.create!(title: "Pin4", description: "Des4", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 1)
Pin.create!(title: "Pin5", description: "Des5", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 1)
Pin.create!(title: "Pin6", description: "Des6", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 2)
Pin.create!(title: "Pin7", description: "Des7", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 2)
Pin.create!(title: "Pin8", description: "Des8", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 3)
Pin.create!(title: "Pin9", description: "Des9", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 4)
Pin.create!(title: "Pin10", description: "Des10", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 1, board_id: 5)
Pin.create!(title: "Pin11", description: "Des1", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 6)
Pin.create!(title: "Pin12", description: "Des2", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 6)
Pin.create!(title: "Pin13", description: "Des3", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 6)
Pin.create!(title: "Pin14", description: "Des4", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 6)
Pin.create!(title: "Pin15", description: "Des5", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 7)
Pin.create!(title: "Pin16", description: "Des6", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 7)
Pin.create!(title: "Pin17", description: "Des7", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 7)
Pin.create!(title: "Pin18", description: "Des8", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 8)
Pin.create!(title: "Pin19", description: "Des9", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 9)
Pin.create!(title: "Pin20", description: "Des10", image_url: "http://res.cloudinary.com/swissashley/image/upload/v1472660341/sample.jpg", user_id: 2, board_id: 10)
