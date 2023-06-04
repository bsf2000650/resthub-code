


// contactController.js
// Import contact model
// import Contact from './contactModel';
var Contact = require('./contactModel');
// Handle index actions
exports.index = function (req, res) {
Contact.find().limit(10).exec()
        .then(contacts => {
            res.json({
                status: "success",
                message: "Contacts retrieved successfully",
                data: contacts
            });
        })
        .catch(err => {
            res.json({
                status: "error",
                message: err
            });
        });
};


// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};


// Handle view contact info
// exports.view = function (req, res) {
//     Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Contact details loading..',
//             data: contact
//         });
//     });
// };

exports.view = function(req,res){
    Contact.findById(req.params.contact_id)
    .then(contact => {
        res.json({
            message : 'Contact details loading...',
            data: contact
        })
    })
    .catch(err=>{
        res.send(err)
    })
}


// Handle update contact info
// exports.update = function (req, res) {
// Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);
// contact.name = req.body.name ? req.body.name : contact.name;
//         contact.gender = req.body.gender;
//         contact.email = req.body.email;
//         contact.phone = req.body.phone;
// // save the contact and check for errors
//         contact.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: contact
//             });
//         });
//     });
// };



exports.update = function (req, res) {
    Contact.findById(req.params.contact_id)
    .then(contact=>{
        contact.save(err)
        .then(err=>{
            res.json({
                message: 'Contact Info updated',
                data: contact
            })
        })
        .catch(err=>{
            res.json(err);
        })
    })
    .catch(err=>{
        res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
    })
}

// Handle delete contact
// exports.delete = function (req, res) {
//     Contact.remove({
//         _id: req.params.contact_id
//     }, function (err, contact) {
//         if (err)
//             res.send(err);
// res.json({
//             status: "success",
//             message: 'Contact deleted'
//         });
//     });
// };

exports.delete = function(req,res){
    Contact.remove(req.params.contact_id)
    .then(contact=>{
        res.json({
            status: "Success",
            message: 'Cotact deleted'
        })
    })
    .catch(err=>{
        res.send(err);
    })
}