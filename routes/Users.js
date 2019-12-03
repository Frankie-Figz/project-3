const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require("../models")
// const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

users.post('/check_user_order', (req,res) => {
  db.order.findOne({
    where : {
      user_id: req.body.user_id,
      ispaid: req.body.ispaid
    }
  })
  .then(response => {
    // return response.data
    if(!response){
      db.order.create({
        user_id: req.body.user_id,
        ispaid: req.body.ispaid
      })
      .then(order => {
        console.log(order.id);
        res.json({status: 'Order has been registed !'});
      })
      .catch(err => {
        res.send('error: ' + err);
      })

      console.log("No data for order")
      res.json({error: 'No Order Exists'})
      // return response.data
    }
    else{
      console.log(response.id);
      db.orderline.create({
        order_id : response.id,
        product_id : parseInt(req.body.product_id),
        qty : 1,
        price : parseFloat(req.body.price),

      }).then(lines => {
        console.log(lines);
      })
      .catch(err => {
        res.send('error: ' + err)
      })
      res.json({ error: "We in the money !"})
    }
  })
  .catch(err => {
    console.log(err);
  })
});

users.get('/check_orderlines/:user_id', (req,res) => {
  console.log("I am here beginning the GET of Orderlines");
  db.order.findOne({
    user_id: parseInt(req.params.user_id),  
    ispaid: false
  })
  .then(resTwo => {
    console.log("I am here trying to find orderlines");
    db.orderline.findAll({
      where : {
        order_id: resTwo.id
      }
    })
    .then(response => {
      // if(response)
      console.log("Here is the response : ");
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.send('error: ' + err);
    })
    
  })
  .catch(err => {
    console.log(err);
    res.send('error: ' + err);
  });
});

// Route for creating a new order
users.post('/order', (req,res) => {
  const today = new Date();
  const orderData = {
    order_date: today,
    ispaid: false,
    user_id: req.user_id,
    document_number: getRandomInt(1000000000)
  };
  
  db.order.create(orderData)
    .then(order => {
      console.log(order);
      res.json({status: 'Order has been registed !'});
    })
    .catch(err => {
      res.send('error: ' + err);
    })
});

users.get('/products_landing', (req,res) => {
  // console.log(db.product);
  db.product.findAll({
    where: {
      product_category_id : 4
    }
  })
  .then(products => {
    res.json(products);
  })
  .catch(err => {
    res.send(err);
  })
});

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  db.user.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          db.user.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  db.user.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  db.user.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users