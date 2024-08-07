const noodles = [
	{
		"noodleName": "Ravioli",
		"noodleID": 0,
		"categories": [5, 7, 5, 2, 1, 8, 6],
		"personalityDescription":
			"You are a Ravioli! This group is known for its fiery and energetic nature. Like the pasta dish, Raviolis are courageous, determined, and fiercely independent. They possess a natural leadership quality and thrive in challenging situations, always seeking new adventures and opportunities for growth.",
		"path": "../img/ravioli-icon-1.webp",
		"ingredients": ["pasta dough", "tomato", "spinach", "cheese", "mushrooms", "beef", "pork", "parmesan cheese", "salt", "pepper", "egg", "marinara sauce", "water"]
	},
	{
		"noodleName": "Pho",
		"noodleID": 1,
		"categories": [7, 9, 5, 9, 3, 8, 8],
		"personalityDescription":
			"You are a Pho! This is a group known for being grounded and practical. Like the noodle dish, the Pho\"s values stability, security, and material comforts, and has a strong sense of loyalty.  Typically known as very reliable friends, they are also known for being patient, hardworking, and having a strong sense of duty.",
		"path": "../img/pho-icon-1.webp",
		"ingredients": ["marrow bones", "water", "beef brisket", "rice noodles", "yellow onion", "ginger", "cinnamon sticks", "star anise", "sugar", "salt", "fish sauce", "spice cloves", "coriander seeds", "beansprouts", "thai basil", "lime wedges", "hoisin sauce", "sriracha"]

	},
	{
		"noodleName": "Mac and Cheese",
		"noodleID": 2,
		"categories": [3, 3, 8, 1, 2, 3, 1],
		"personalityDescription":
			"You are a Mac and Cheese! Versatile and curious, Mac and Cheeses are known for their quick wit, adaptability, and love for communication and socializing. Not unlike the pasta dish, the vibrant personality of a Mac and Cheese makes them the life of any gathering.",
		"path": "../img/mac-and-cheese-icon-1.webp",
		"ingredients": ["macaroni", "salted butter", "all-purpose flour", "milk", "cheddar cheese", "parmesan cheese", "black pepper", "bread crumbs", "ground paprika"]
	},
	{
		"noodleName": "Instant Noodles",
		"noodleID": 3,
		"categories": [1, 1, 7, 6, 5, 1, 4],
		"personalityDescription":
			"You are an Instant Noodle! Not unlike the nurturing nature of the Instant Noodle, the Instant Noodles are a nurturing and sensitive bunch. Deeply intuitive and values emotional connections, creating a safe and loving environment for their loved ones while also being fiercely protective.",
		"path": "../img/instant-noodles-icon-1.webp",
		"ingredients": ["noodles", "water", "dried vegetable package", "soup package", "oil package"]

	},
	{
		"noodleName": "Pad Thai",
		"noodleID": 4,
		"categories": [6, 4, 3, 8, 7, 6, 6],
		"personalityDescription":
			"You are a Pad Thai! Just like the confident and charismatic nature of the Pad Thai noodle, Pad Thais love to be in the spotlight and seeks recognition. However, the Pad Thais also are incredibly generous and loyal to those they care about, making them natural-born leaders.",
		"path": "../img/pad-thai-icon-1.webp",
		"ingredients": ["dried rice sticks", "tamarind puree", "brown sugar", "fish sauce", "oyster sauce", "vegetable oil", "onion", "garlic cloves", "chicken breast", "egg", "bean sprouts", "tofu", "garlic chives", "peanuts"]

	},
	{
		"noodleName": "Chicken Noodle Soup",
		"noodleID": 5,
		"categories": [4, 6, 1, 3, 2, 4, 8],
		"personalityDescription":
			"You are a Chicken Noodle Soup! Just like the detail-oriented and analytical approach required to cook this noodle, the Chicken Noodle Soups have a strong work ethic, love organization, and strive for perfection in all aspects of life. They are often found utilizing their keen attention to detail to excel in their endeavors.",
		"path": "../img/chicken-noodle-soup-icon-1.webp",
		"ingredients": ["butter", "celery", "carrots", "garlic", "chicken stock", "salt", "ground black pepper", "rosemary", "dried sage", "red pepper flakes", "egg noodles", "chicken"]
	},
	{
		"noodleName": "Udon",
		"noodleID": 6,
		"categories": [7, 6, 4, 9, 3, 7, 5],
		"personalityDescription":
			"You are an Udon! Diplomatic and harmonious, Udon\"s seek balance and fairness in relationships. Much like the beautiful Udon noodle, Udon\"s have a natural talent for creating beauty and harmony. Udon\"s are also often found utilizing their strengths to take on the role of peacemaker in conflicts.",
		"path": "../img/udon-icon-1.webp",
		"ingredients": ["udon noodles", "sliced beef", "onion", "dashi", "soy sauce"]
	},
	{
		"noodleName": "Ramen",
		"noodleID": 7,
		"categories": [6, 5, 5, 7, 4, 5, 8],
		"personalityDescription":
			"You are a Ramen! Just like the intense and mysterious Ramen noodle, Ramen\"s are known for their passion and determination, and have a profound depth of emotions and desire for transformation. Their particular personalities make them highly intuitive and secretive.",
		"path": "../img/ramen-icon-1.webp",
		"ingredients": ["sesame oil", "ginger", "garlic", "broth", "water", "dried shiitake mushrooms", "instant noodles", "scallions", "kale", "carrot", "sriracha"]

	},
	{
		"noodleName": "Spaghetti and Meatballs",
		"noodleID": 8,
		"categories": [4, 4, 2, 2, 2, 2, 4],
		"personalityDescription":
			"You are a Spaghetti and Meatballs! Adventurous and optimistic, Spaghetti and Meatballs have a hunger for knowledge that matches their hunger for good pasta noodles. These lovers of freedom can be found seeking new experiences and philosophical pursuits, constantly seeking wisdom and broadening their horizons.",
		"path": "../img/spaghetti-icon-1.webp",
		"ingredients": ["onion", "bell pepper", "garlic powder", "butter", "salt", "pepper", "tomato sauce", "spaghetti noodles", "ground meat"]

	},
	{
		"noodleName": "Lasagna",
		"noodleID": 9,
		"categories": [6, 9, 2, 1, 1, 8, 3],
		"personalityDescription":
			"You are a Lasagna! Just like anyone who attempts to cook the dish, Lasagnas are ambitious and disciplined, and focused on achieving success and stability. Armed with a strong sense of responsibility and determination, Lasagnas are known for being reliable and hardworking individuals.",
		"path": "../img/lasagna-icon-1.webp",
		"ingredients": ["ricotta cheese", "spices", "garlic", "beef", "sausage", "pasta sauce", "mozzarella", "egg", "parsley", "onion", "parmesan"]

	},
	{
		"noodleName": "Taiwanese Beef Noodle Soup",
		"noodleID": 10,
		"categories": [5, 6, 1, 4, 2, 5, 7],
		"personalityDescription":
			"You are a Taiwanese Beef Noodle Soup! Intellectual and independent, Taiwanese Beef Noodle Soups are forward thinkers, valuing individuality and innovation, as seen in the noodle dish as well. Equipped with a passion for social justice and humanitarian causes, they are often seen as the visionary of the group.",
		"path": "../img/beef-noodle-soup-icon-1.webp",
		"ingredients": ["beef stew meat", "onions", "celery", "carrots", "beef bouillon granules", "dried parsley", "ground black pepper", "water", "frozen egg noodles"]

	},
	{
		"noodleName": "Bread",
		"noodleID": 11,
		"categories": [2, 1, 2, 5, 1, 1, 8],
		"personalityDescription":
			"You are Bread! Much like Bread in a noodle-themed horoscope, Breads are not afraid to stand out from the crowd. Imaginative and em\"path\"etic, Breads are highly intuitive and deeply compassionate, often seeking solace in artistic pursuits and a connection to the spiritual realm. Their uniqueness makes them natural healers and dreamers.",
		"path": "../img/bread-icon-1.webp",
		"ingredients": ["bread"]

	} 
];

export default noodles;
