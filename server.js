var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

// ---------------------------------------------------------------

const db = require("./models");

// // React Front-End 
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   const path = require('path');
//   app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// };

var syncOptions = {force: false};

// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

const PORT = process.env.PORT || 4000;
db.sequelize.sync(syncOptions).then(function() {
  app.listen(port, function() {
    console.log('Server is running on port: ' + PORT)
  })
});

module.exports = app;
