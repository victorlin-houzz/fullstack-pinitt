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

User.create!(username: "daniel",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/c_thumb,g_face,h_629,w_629/v1473100945/daniel-radcliffe_twr4u1.jpg",
description: "I'm not clumsy, I'm accident-prone!\n
I think I'm a tiny bit like Harry 'cos I'd like to have an owl. Yeah, that's the tiny bit, actually.\n
I'm not a religious person. My mom was of Jewish blood and my dad was Protestant.")

User.create!(username: "emma",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/c_thumb,h_300,w_300/v1473100256/emma-watson_mblx3y.jpg",
description: "")

User.create!(username: "george",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/v1473100255/george-clooney_sdydbh.jpg",
description: "I am an American actor, filmmaker, and activist. He has received three Golden Globe Awards for his work as an actor and two Academy Awards, one for acting and the other for producing.")

User.create!(username: "will",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/c_thumb,h_300,w_300/v1473100255/will-smith_c69qwg.jpg",
description: "I am an American actor, producer, rapper, and songwriter. In April 2007, Newsweek called me the most powerful actor in Hollywood.")

User.create!(username: "matt",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/c_thumb,w_300/v1473100255/matt-damon_cufrih.jpg",
description: "I am an American actor, film producer and screenwriter, ranked among Forbes magazine's most bankable stars and is one of the highest-grossing actors of all time.")

User.create!(username: "taylor",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/v1473100255/taylor-swift_xzggox.jpg",
description: "I am an American singer-songwriter. Raised in Wyomissing, Pennsylvania, she moved to Nashville, Tennessee, at the age of 14 to pursue a career in country music.")

User.create!(username: "angelina",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/c_thumb,h_301,w_301/v1473100849/angelina-jolie_hdam3c.jpg",
description: "I am an American actress, filmmaker, and humanitarian. She has received an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards, and has been cited as Hollywood's highest-paid actress.")

User.create!(username: "kerry",password: "password",
image_url: "http://res.cloudinary.com/pinitt/image/upload/c_thumb,h_474,w_474/v1473100849/kerry-washington_kls9g0.jpg",
description: "I am an American actress.
Since 2012, gained wide public recognition for starring in
the ABC drama Scandal, a Shonda Rhimes series in which as Olivia Pope.")




Board.create!(title: "Awesome Food", description: "Yum yum yum...", user_id: 1)
Board.create!(title: "Travel", description: "Let's go somewhere!", user_id: 1)
Board.create!(title: "Board3", description: "Des3", user_id: 1)
Board.create!(title: "Board4", description: "Des4", user_id: 1)
Board.create!(title: "Board5", description: "Des5", user_id: 1)
Board.create!(title: "Board6", description: "Des6", user_id: 2)
Board.create!(title: "Board7", description: "Des7", user_id: 2)
Board.create!(title: "Board8", description: "Des8", user_id: 2)
Board.create!(title: "Board9", description: "Des9", user_id: 2)
Board.create!(title: "Board10", description: "Des10", user_id: 2)



Pin.create!(title: "Pesto Zucchini Noodles", description: "It's time for another summery zucchini recipe and this time it's fresh pesto zucchini noodles with roasted tomatoes and grilled chicken! Ever since I came across the idea of zucchini noodles I have been a little obsessed with them! I mean what's not to like about them? They behave just like spaghetti noodles and they are lighter and healthier! This recipe could not be easier, you simply roast the tomatoes, grill the chicken, slice the zucchini into noodles and then toss it all in a fresh homemade basil pesto! In addition to being nice and light and healthy, this dish is pure summer in a bowl with the juicy roasted tomatoes bursting in your mouth balancing off the creamy pesto. The zucchini noodles can be served cool making this dish perfect for hot summer days!", image_url: "https://s-media-cache-ak0.pinimg.com/236x/cc/1f/7a/cc1f7ad4dc9c8c80fbf58ccff4b086fb.jpg", url:"http://www.closetcooking.com/2015/08/pesto-zucchini-noodles-with-roasted.html", user_id: 1, board_id: 1)
Pin.create!(title: "EASY HOMEMADE WONTON SOUP RECIPE", description: "This authentic homemade wonton soup recipe is easy and fun to make! Each hearty bowl is packed with plump pork dumplings, fresh vegetables and jumbo shrimp.", image_url: "https://s-media-cache-ak0.pinimg.com/564x/f5/77/cc/f577ccda79c3b8b15b0487e9f9dddbfa.jpg", url: "http://www.jessicagavin.com/wonton-soup-recipe-thats-easy-to-make/", user_id: 1, board_id: 1)
Pin.create!(title: "PF CHANG’S CHICKEN LETTUCE WRAPS", description: "I am such a sucker for lettuce wraps. They are so low in carbs so I become a bottomless pit, stuffing my face without any kind of guilt. And when it’s an exact PF Chang’s replica that can be made in 20 minutes or less – well, that just means I’m having this 5 times a week.", image_url: "https://s-media-cache-ak0.pinimg.com/236x/14/26/f0/1426f0a61e908e89457f041eefe218fd.jpg", url: "http://damndelicious.net/2014/05/30/pf-changs-chicken-lettuce-wraps/", user_id: 1, board_id: 1)
Pin.create!(title: "Creamy Spinach Tomato Tortellini", description: "Wooooo.", image_url: "http://www.cookingclassy.com/wp-content/uploads/2014/06/creamy-spinach-tortellini-4edit+srgb..jpg", url: "http://www.cookingclassy.com/2014/06/creamy-spinach-tomato-tortellini/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed:+CookingClassy+(Cooking+Classy)", user_id: 1, board_id: 1)
Pin.create!(title: "Classic Mint Chocolate Brownies", description: "Tasty!", image_url: "https://s-media-cache-ak0.pinimg.com/236x/e6/7e/aa/e67eaa2808d2865a903d07a94b527eed.jpg", url: "http://sallysbakingaddiction.com/2014/12/05/classic-mint-chocolate-brownies/", user_id: 1, board_id: 1)
Pin.create!(title: "Hot Sausage Buffalo Dip", description: "Now that the holidays are over we can get back to focusing on football. The first playoff games in college football were played yesterday. There is one more game to determine the champion. The NFL is getting ready for the playoffs. There is still a lot of tailgating to be done!", image_url: "http://2.bp.blogspot.com/-f6rN3XfUzeg/VHpvP0qx1TI/AAAAAAAAcg8/8yq6yrwjz08/s1600/hot%2Bsausage%2Bbuffalo%2Bdip%2B(6)A.jpg", url: "http://www.plainchicken.com/2015/01/hot-sausage-buffalo-dip-football-friday.html", user_id: 1, board_id: 1)
Pin.create!(title: "Panera Bread Broccoli Cheddar Soup Copycat Recipe", description: "This is exactly like Panera Bread's broccoli soup. It is so thick, rich, creamy, and cheesy.", image_url: "http://3.bp.blogspot.com/-8UOCQWEhdc8/Up-2Tv1aiYI/AAAAAAAAIUs/sGpBj2vIeFQ/s640/DSC_0644.tiff", url: "http://www.yammiesnoshery.com/2013/12/panera-bread-broccoli-cheddar-soup.html", user_id: 1, board_id: 1)
Pin.create!(title: "Cinnamon Sugar Mini Donuts", description: "So, this time I am going to show you something...", image_url: "https://s-media-cache-ak0.pinimg.com/564x/0e/fa/e4/0efae476cfdacb04f7056a56457936ac.jpg", url: "http://www.cookingonthefrontburners.com/2016/08/baked-cinnamon-sugar-mini-donuts-fair-style.html", user_id: 1, board_id: 1)
Pin.create!(title: "Korean Barbecue Rice Bowl", description: "Enjoy :)", image_url: "https://s-media-cache-ak0.pinimg.com/564x/39/04/62/39046232ea5142e5fb1aa237a0adbe86.jpg", url: "https://www.unclebens.com/recipesearch/korean-barbecue-rice-bowl?pp=0", user_id: 1, board_id: 1)
Pin.create!(title: "One Pan Chicken Apple Sausage Pasta", description: "Sooooo good!!", image_url: "https://s-media-cache-ak0.pinimg.com/564x/26/3b/35/263b350447be9fef088d48b3371f025a.jpg", url: "http://inspiredbycharm.com/2014/09/one-pan-chicken-apple-sausage-pasta.html", user_id: 1, board_id: 1)
Pin.create!(title: "GARLIC CHEESE NAAN", description: "Garlic Cheese Naan is super soft and flavorful flat bread that you must not miss to try. The minced garlic and melted cheese in every single bite makes this bread simply irresistible.", image_url: "https://s-media-cache-ak0.pinimg.com/236x/11/42/2f/11422f3e5386f483594c3b17a7a82619.jpg", url: "http://www.cookwithkushi.com/garlic-cheese-naan/", user_id: 1, board_id: 1)
Pin.create!(title: "The Two Minute Cinnamon Banana Mug Cake", description: "I highly suggest you take two minutes to whip this up and try it out for yourself! You will be happy you did.", image_url: "https://s-media-cache-ak0.pinimg.com/564x/e7/a8/94/e7a894db218c1f03674906a5d378621c.jpg", url: "http://www.delightedmomma.com/2013/09/the-two-minute-cinnamon-banana-mug-cake.html?m=1", user_id: 1, board_id: 1)

Pin.create!(title: "10 amazing places to see one day.", description: "Ten AMAZING jaw dropping places to see one day. Stunning one of kind locations from across the globe.", image_url: "https://s-media-cache-ak0.pinimg.com/236x/ed/4d/4f/ed4d4fb9c6fd74ef4a305ed7d21caf12.jpg", url: "http://www.gloholiday.com/10-fascinating-places-to-visit-one-day/", user_id: 1, board_id: 2)
Pin.create!(title: "Palawan: The Most Beautiful Island in the World", description: "The Philippines's Palawan Island was voted the most beautiful island in the world, and with these photos, you can see why Palawan is a…", image_url: "https://s-media-cache-ak0.pinimg.com/564x/58/31/0b/58310bbb28a280c7c43dc2705133136d.jpg", url: "http://thesundaychapter.com/2016/01/palawan-the-most-beautiful-island-in-the-world/", user_id: 1, board_id: 2)
Pin.create!(title: "You Can Rent A Glass Igloo In Finland To Watch The Northern Lights", description: "Imagine looking up at the Northern Lights from a cozy hotel room 250 km above the Arctic Circle.", image_url: "https://s-media-cache-ak0.pinimg.com/564x/76/c4/cc/76c4ccd6ec87397f36487d13ed110bd5.jpg", url: "https://www.buzzfeed.com/ryanhatesthis/you-can-rent-a-glass-igloo-in-finland-to-watch-the", user_id: 1, board_id: 2)
Pin.create!(title: "The Northern Lights: Trip of a Lifetime", description: "Where to go to see the Northern Lights, including information on Iceland, Scandinavia, Finland and Canada, the best tour operators,…", image_url: "https://s-media-cache-ak0.pinimg.com/564x/73/4d/52/734d5239a66dcf64cb94279b81d6234c.jpg", url: "http://www.telegraph.co.uk/travel/activity-and-adventure/The-northern-lights-Trip-of-a-Lifetime/", user_id: 1, board_id: 2)
Pin.create!(title: "Streets of Monaco at Night", description: "This is the place!", image_url: "https://s-media-cache-ak0.pinimg.com/236x/92/79/74/9279748d7ef58e102bab2b612e1d251e.jpg", url: "http://www.entouriste.com/hills-of-monaco/streets-of-monaco-at-night/", user_id: 1, board_id: 2)
Pin.create!(title: "The Secret Ancient City of Bagan, Myanmar", description: "Let's go!", image_url: "https://s-media-cache-ak0.pinimg.com/564x/3c/0f/3c/3c0f3c9c936da47772b912844a475f90.jpg", url: "http://thesundaychapter.com/2016/03/the-ancient-city-of-bagan-myanmar/", user_id: 1, board_id: 2)
Pin.create!(title: "Zip Line in Alps", description: "Pretty fun!", image_url: "https://s-media-cache-ak0.pinimg.com/236x/d7/eb/94/d7eb94c77bf9e9b2d79735fd07edf59a.jpg", url: "http://www.ladylux.com/articles/9-bucket-list-travel-spots", user_id: 1, board_id: 2)
Pin.create!(title: "24 hours in New York City", description: "One perfect day", image_url: "https://s-media-cache-ak0.pinimg.com/564x/c1/b3/6f/c1b36f80d4bd7a5ce5bc6b85cc31c0fc.jpg", url: "https://www.lonelyplanet.com/usa/new-york-city/travel-tips-and-articles/76747", user_id: 1, board_id: 2)
Pin.create!(title: "Bora Bora Island", description: "one of the most magical and beautiful islands in the world.", image_url: "https://s-media-cache-ak0.pinimg.com/564x/29/4e/86/294e86c24421a1afde0e8b278b7f3255.jpg", url: "http://www.topdreamer.com/bora-bora-island-most-exotic-islands/", user_id: 1, board_id: 2)
Pin.create!(title: "London", description: "London", image_url: "https://s-media-cache-ak0.pinimg.com/236x/2f/96/6c/2f966cab8d075c08b55b62d36ab9d102.jpg", url: "http://www.sacramentostreet.com/2016/03/im-loving-131/", user_id: 1, board_id: 2)
Pin.create!(title: "Cherry blossoms in Paris", description: "Cherry blossoms in Paris", image_url: "https://s-media-cache-ak0.pinimg.com/564x/f5/22/ca/f522ca16f70752c454f485c483381b4e.jpg", url: "https://plus.google.com/u/0/114596371341522095848/posts/Y1t5t4dp4ro?cfem=1", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
Pin.create!(title: "Cl", description: "Des6", image_url: "", url: "", user_id: 1, board_id: 2)
