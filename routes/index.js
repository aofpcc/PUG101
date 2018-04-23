var express = require('express');
var router = express.Router();

const { users } = require('../assets/users.json'); // { users: [{}, {}] }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jirachai Chansivanon' });
});

router.get('/my-nick', function(req, res) {
  res.render('nick', { mynickname: 'Job Za 555+' })
})

router.get('/users', function(req, res) {
  res.render('user/show-all', { users })
})

module.exports = router;
