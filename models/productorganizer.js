const squel = require('squel').useFlavour('mysql');
const uuid = require('uuid');
const moment = require('moment');

const connection = require('../config/db');

connection.query(`create table if not exists productorganizer (

    id varchar(50),
    name varchar(50),
    description varchar(50),
    price varchar(5)
  )`, err => {
    if(err) {
      console.log('table create err:', err);
    }
  })


exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('productorganizer').toString();

    connection.query(sql, (err, product) => {
      if(err) {
        reject(err);
      } else {
        resolve(product);
      }
    });
  });
};

/*exports.getOne = function(productorganizer) 
  return new Promise((resolve, reject) => {
    let sql = squel.select()
                   .from('productorganizer')
                   .where('product = ?', product)
                   .toString();

    connection.query(sql, (err, productorganizer) => {
      
      if(err) {
        reject(err);
      } else if(!productorganizer) {
        reject({error: 'entry found.'})
      } else {
        resolve(productorganizer);
      }
    });
  });
};
*/

exports.create = function(newproductorganizer) {
  return new Promise((resolve, reject) => {
    

    let sql = squel.insert()
                   .into('productorganizer')
                   .setFields(newproductorganizer)
                   .set('id', uuid())
                   .toString();

    connection.query(sql, err => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.delete = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.delete()
                   .from('productorganizer')
                   .where('id = ?', id)
                   .toString();

    connection.query(sql, (err, result) => {
      if(result.affectedRows === 0) {
        reject({error: 'contact not found.'})
      } else if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.update = function(id, updateObj) {
  return new Promise((resolve, reject) => {
    delete updateObj.id;

    let sql = squel.update()
                   .table('productorganizer')
                   .setFields(updateObj)
                   .where('id = ?', id)
                   .toString();

    connection.query(sql, (err, okUpdate) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};