// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/',function(req,res){
    res.json({
        status : 'API Its Working',
        message : 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var contactController  = require('./contactController');
router.route('/contacts')
      .get(contactController.index)
      .post(function(req,res){
        contactController.new;
      });

var contactController  = require('./contactController');
router.route('/contacts')
      .get(contactController.index)
      .post(contactController.new);

router.route('/contacts/:contact_id')
      .get(contactController.view)
      .patch(contactController.update)
      .put(contactController.update)
      .delete(contactController.delete)

// Exports API routes
module.exports = router;


