const FileSystem = require('fs');

exports.dishes = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
    price: '£10.00',
    image: 'pizza-2.jpeg' ,
    votes: 1,
    ingredients: [
      {
        _id: 1,
        name: 'Tomato',

      },
      {
        _id: 2,
        name: 'Cheese',

      },
      {
        _id: 3,
        name: 'Pineapple',
      }
    ],
    allergies: [
      {
        _id: 1,
        name: 'Tomatoes'
      },
      {
        _id: 2,
        name: 'Milk'
      },
      {
        _id: 3,
        name: 'Eggs'
      }
    ],
    _id: "RwbxJnE0S3TPZcXL"
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
    price: '£12.00',
    image: 'pizza.jpeg',
    votes: 2,
    _id: "vKEq3ML9y947pvhA"
  }
]