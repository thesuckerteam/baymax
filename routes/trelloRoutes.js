var express = require('express');
var trello = require('../utility/trello')
var router = express.Router();

router.get('/addCardTODO/:cardName/:desc', function(req,res, next){
  var name = req.params.cardName
  var desc = req.params.desc
  trello.addCardTODO(name,desc, function(error, result){
    if (error) res.sendStatus(500)
    else res.sendStatus(200)
  })
})

router.get('/addCardDOING/:cardName/:desc', function(req,res, next){
    var name = req.params.cardName
    var desc = req.params.desc
    trello.addCardDOING(name,desc, function(error, result){
      if (error) res.sendStatus(500)
      else res.sendStatus(200)
    })
  })

  router.get('/addCardDONE/:cardName/:desc', function(req,res, next){
    var name = req.params.cardName
    var desc = req.params.desc
    trello.addCardDONE(name,desc, function(error, result){
      if (error) res.sendStatus(500)
      else res.sendStatus(200)
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
