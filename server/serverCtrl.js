const app = require('./server')
    , db = app.get('db');


module.exports = {
  newUser: function(req, res) {
      console.log(req.body.newUserObj);
      let first = req.body.newUserObj.firstname
        , last = req.body.newUserObj.lastname
        , username = req.body.newUserObj.username
        , pass = req.body.newUserObj.password;
      db.new_user([username, pass, first, last], function(err, sqlResponse) {
        !err ? res.status(200).send(sqlResponse) : res.status(500).send(err)
      });
  },

  getProducts: function(req, res){
    db.get_products(function(err, response){
      if(!err) {
      res.send(response);
      } else {
        res.send(err);
      }
    });
  },

  getProductById: (req, res) => {
    db.get_one_product(req.params.id, (err,dbRes) => !err ? res.status(200).send(dbRes) : res.status(err.status).send(err))
  }
}