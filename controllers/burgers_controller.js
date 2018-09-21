var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
//selectAll
router.get('/', function(req, res) {
  burger.selectAll(function(burger_data) {
    console.log('burger = ', burger_data);
    res.render('index', { burger_data });
  });
});

//insertOne
router.post('/burgers/create', function(req, res) {
  console.log('name = ', req.body.burger_name);
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    console.log('new added ', result.id);
    res.redirect('/');
  });
});

router.put('/burgers/update/:id', function(req, res) {
  var condition = req.params.id;
  console.log('condition', condition);
  burger.updateOne(condition, function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
