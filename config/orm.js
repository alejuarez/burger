// Import MySQL connection.
var connection = require('../config/connection.js');

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(tableInput, vals, cb) {
    var queryString = 'INSERT INTO ' + tableInput;
    console.log(queryString);
    queryString += ' (burger_name) VALUES ( ';
    queryString += " '";
    queryString += vals;
    queryString += "' )";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

  updateOne: function(tableInput, condition, cb) {
    var queryString = 'UPDATE ' + tableInput;
    queryString += ' SET devoured=true WHERE id=';
    queryString += condition;
    queryString += ';';
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  }
};
// Export the orm object for the model (burger.js).
module.exports = orm;
