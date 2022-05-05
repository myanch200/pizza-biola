const nedb = require("nedb");
const seeds = require("./seeds");
class Dish {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log("DB connected to " + dbFilePath);
      this.db_initialized = true;
    } else {
      console.log("No DB file path provided");
      this.db = new nedb();
      this.db_initialized = false;
    }
  }

  init() {
    // if the db is newly created seed with some data
    if (!this.db_initialized) {
      this.db.insert( seeds.dishes, (err, newDoc) => {
        if(err){
          console.log(err);
        }
        else{
          console.log('Seeded DB with ' + newDoc.length + ' dishes');
        }
      });
    }
  }

  getAllDishes() {
    return new Promise((resolve, reject) => {
      this.db.find({ show_on_menu: true }, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  getDishesForAdmin() {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  getDish(id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }
  getByCategory(category) {
    return new Promise((resolve, reject) => {
      this.db.find({ category: category }, (err, docs) => {
        if (err) {
          console.log("Error: " + err);
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  addDish(dish) {
    return new Promise((resolve, reject) => {
      this.db.insert(dish, (err, newDoc) => {
        if (err) {
          reject(err);
        } else {
          resolve(newDoc);
        }
      });
    });
  }

  updateDish(id, dish) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          console.log(dish.ingredients);
          doc.name = dish.name;
          doc.description = dish.description;
          doc.category = dish.category;
          doc.price = dish.price;
          doc.ingredients = dish.ingredients;
          doc.allergies = dish.allergies;
          doc.image = dish.image;
          doc.show_on_menu = dish.show_on_menu || false;
          this.db.update({ _id: id }, doc, {}, (err, numReplaced) => {
            if (err) {
              reject(err);
            } else {
              resolve(numReplaced);
            }
          });
        }
      });
    });
  }

  deleteDish(id) {
    return new Promise((resolve, reject) => {
      this.db.remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) {
          reject(err);
        } else {
          resolve(numRemoved);
        }
      });
    });
  }

  getMostVotedDishes() {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs.sort((a, b) => b.votes - a.votes));
        }
      });
    });
  }
  incrementVotes(id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          doc.votes++;
          this.db.update({ _id: id }, doc, {}, (err, numReplaced) => {
            if (err) {
              reject(err);
            } else {
              resolve(numReplaced);
            }
          });
        }
      });
    });
  }
}

module.exports = Dish;
