const nedb = require('nedb');
const seeds = require('./seeds');
class Dish {
  constructor(dbFilePath) {
    if (dbFilePath) {
    this.db = new nedb({ filename: dbFilePath, autoload: true });
    console.log('DB connected to ' + dbFilePath);
    } else {
    this.db = new nedb();
    }
    }

  init(){
    this.db.insert( seeds.dishes, (err, newDoc) => {
      if(err){
        console.log(err);
      }
      else{
        console.log('Seeded DB with ' + newDoc.length + ' dishes');
      }
    });
  }

  getAllDishes(){
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if(err){
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  getDish(id){
    return new Promise((resolve, reject) => {
      this.db.findOne({_id: id}, (err, doc) => {
        if(err){
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  addDish(dish){
    return new Promise((resolve, reject) => {
      this.db.insert(dish, (err, newDoc) => {
        if(err){
          reject(err);
        } else {
          resolve(newDoc);
        }
      });
    });
  }

  updateDish(id, dish){
    return new Promise((resolve, reject) => {
      this.db.update({_id: id}, dish, {}, (err, numReplaced) => {
        if(err){
          reject(err);
        } else {
          resolve(numReplaced);
        }
      });
    });
  }

  deleteDish(id){
    return new Promise((resolve, reject) => {
      this.db.remove({_id: id}, {}, (err, numRemoved) => {
        if(err){
          reject(err);
        } else {
          resolve(numRemoved);
        }
      });
    });
  }

  getMostVotedDishes(){
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if(err){
          reject(err);
        } else {
          resolve(docs.sort((a, b) => b.votes - a.votes));
        }
      });
    });
  }
  
}

module.exports = Dish