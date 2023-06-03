


// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

const DB = 'mongodb+srv://asad:ajaksdf@cluster0.hkh2qla.mongodb.net/resthubstack?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log('connection successful');
}).catch((err) => console.log(err,'no connection'));

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());




// // Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/resthub', {
    
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
//     family : 4,
// });
// // var db = 'mongodb+srv://asad:ajaksdf@cluster0.hkh2qla.mongodb.net/?retryWrites=true&w=majority'

// var db = mongoose.connection;

// Added check for DB connection
if(!DB)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodejs'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});



