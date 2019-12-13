var express = require('express');
var trello = require('../utility/trello')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addCard', function(req,res, next){
  trello.addCardTODO(function(){

  })
})

router.get('/getBoard', function(req, res,next){
  trello.getBoards(function(){

  })
})

router.get('/addList', function(req,res,next){
  trello.addList(function(){

  })
})

router.get('/getLists', function(req,res,next){
  trello.getLists(function(){

  })
})



module.exports = router;
