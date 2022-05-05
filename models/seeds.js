const FileSystem = require('fs');

exports.dishes = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
    price: 10.00,
    image: 'pizza-2.jpeg' ,
    show_on_menu: true,
    category: 'pizza',
    votes: 1,
    ingredients: 
    ['Tomato','Cheese','Pineapple'],
    allergies: 
      ["Dairy", "Eggs", "Gluten", "Peanuts", "Soy", "Sulfites", "Tree Nuts"]
    ,
    _id: "RwbxJnE0S3TPZcXL"
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
    price: 12.00,
    image: 'pizza.jpeg',
    show_on_menu: true,
    ingredients: 
    ['Tomato','Cheese','Pineapple'],
    category: 'pizza',
    votes: 2,
    _id: "vKEq3ML9y947pvhA"
  },
  {
    id: 3,
    name: "Pizza Biola",
    description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
    price: 12.00,
    image: 'pizza-3.jpeg' ,
    show_on_menu: true,
    category: 'pizza',
    ingredients: 
    ['Tomato','Cheese','Pineapple'],
    allergies: 
      ["Tomatoes", "Milk", "Eggs"],
    
    votes: 1,
    _id: "RwbxJnE0S3TPZcLX"
  
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    description: `arbonara (Italian: [karboˈnaːra]) is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century. The cheese is usually Pecorino Romano, Parmigiano-Reggiano, or a combination of the two.`,
    price: 10.00,
    image: 'pasta.jpeg',
    show_on_menu: true,
    votes: 1,
    _id: "vKEq3ML9y947pvhB",
    category: 'pasta',
    ingredients: 
    ['Tomato','Cheese','Pineapple'],
    allergies: [
     ["Milk", "Eggs"]
    ]

  }

]

exports.users = [
  {
    email: "myanch200@caledonian.ac.uk",
    password: "$2b$10$ZPpBlmHSSixaePWAnL1JVOKy94Q1nOeQMMF4W5dF9H1MKGuTd6..m"  //nicepass
  },
  {
    email: "example@gmail.com",
    password: "$2a$10$CJnsokrYBY5RC9GLQYxzMOVUtAShoPoIbkPK2gaR2RjUGQJz/xZQu" //example
  }
]