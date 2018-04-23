var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jirachai Chansivanon' });
});

router.get('/my-nick', function(req, res) {
  res.render('nick', { mynickname: 'Job Za 555+' })
})

router.get('/users', function(req, res) {
  const users = [
    {
      name: "Jim",
      age: 12,
    },
    {
      name: "Tom",
      age: 21,
    },
    {
      name: "John",
      age: 23,
    },
  ]
  // { users }
  // { users: users }
  res.render('user/show-all', { users })
})

module.exports = router;
