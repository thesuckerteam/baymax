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

router.get('/addList/:name', function(req,res,next){
  trello.addList(req.params.name,function(){

  })
})

router.get('/getLists', function(req,res,next){
  trello.getLists(function(){

  })
})

router.get('/addTeamMemberToBoard/:memberId', function(req,res,next){
    trello.addTeamMemberToBoard(req.params.memberId, function(){

    })
})

router.get('/addTeamMemberToCard/:memberId/:cardId', function(req,res, next){
    trello.addTeamMemberToCard(req.params.cardId, req.params.memberId, function(){

    })
})

router.get('/deleteCard/:cardId', function(req,res,next){
    trello.deleteCard(req.params.cardId, function(){

    })
})

router.get('/updateCardName/:cardId/:name', function(req, res, next){
    trello.updateCardName(req.params.cardId, req.params.name, function(){

    })
})

router.get('/updateListName/:listId/:name', function(req, res, next){
    trello.updateListName(req.params.listId, req.params.name, function(){

    })
})

router.get('/addDueDateToCard/:cardId/:date', function(req,res, next){
    trello.addDueDateToCard(req.params.cardId, req.params.date, function(){
        
    })
})
module.exports = router;
