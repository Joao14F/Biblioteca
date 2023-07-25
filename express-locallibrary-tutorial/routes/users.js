var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users cool. */
router.get('/ifc', function(req, res, next) {
  res.render('index', { title: 'Bem vindo ao IFC' });
});

/* GET users cool. */
router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'You are so cool' });
});

/* GET users cool beach. */
router.get('/cool/beach', function(req, res, next) {
  res.send('Adoro praia');
});

module.exports = router;
