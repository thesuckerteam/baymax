var express = require('express');
var trello = require('../utility/trello')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addCardTODO', function(req,res, next){
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

router.get('/addCardDOING',function(req,res,next){
  trello.addCardDOING(function(){

  })
})

router.get('/addCardDONE',function(req,res,next){
  trello.addCardDONE(function(){
    
  })
})

router.get('/deleteCard',function(req,res,next){
  trello.deleteCard(function(){
    
  })
})

router.get('/updateCardName',function(req,res,next){
  trello.updateCardName(function(){
    
  })
})

router.get('/updateListName',function(req,res,next){
  trello.up(function(){
    
  })
})



module.exports = router;
