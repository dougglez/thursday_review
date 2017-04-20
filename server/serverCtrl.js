const app = require('./server')
    , db = app.get('db');


module.exports = {
  newUser: function(req, res) {
      console.log(req.body.newUserObj);
      let first = req.body.newUserObj.firstname
        , last = req.body.newUserObj.lastname
        , username = req.body.newUserObj.username
        , pass = req.body.newUserObj.password;
      db.new_user([first, last, username, pass], function(err, sqlResponse) {
        !err ? res.status(200).send(sqlResponse) : res.status(500).send(err)
      });
  }
}