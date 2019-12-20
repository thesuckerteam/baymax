var express = require('express');
var trello = require('../utility/trello')
var router = express.Router();

router.get('/lists/card/:cardName/:desc', function(req,res, next){
  var name = req.params.cardName
  var desc = req.params.desc
  trello.addCardTODO(name,desc, function(error, result){
    if (error) res.sendStatus(500)
    else res.sendStatus(200)
  })
})

// router.get('/list/:listid/card/:name/:desc', function(req,res, next){
//   var name = String(req.params.cardName)
//   var desc = String(req.params.desc)
//   var listid = String(req.params.listid)
//   trello.addNewCard( name, desc, listid, function(error, result){
//     res.send(res.statusCode)
//   })
// })

router.get('/lists/cardDOING/:cardName/:desc', function(req,res, next){
    var name = req.params.cardName
    var desc = req.params.desc
    trello.addCardDOING(name,desc, function(error, result){
      res.send(res.statusCode)
    })
  })

  router.get('lists/cardDONE/:cardName/:desc', function(req,res, next){
    var name = req.params.cardName
    var desc = req.params.desc
    trello.addCardDONE(name,desc, function(error, result){
      res.send(res.statusCode)
    })
  })

router.get('/boards', function(req, res,next){
  trello.getBoards(function(){
    res.send(res.statusCode)
  })
})

router.get('/lists/:listname', function(req,res,next){
  trello.addList(req.params.listname,function(){

  })
})

router.get('/lists', function(req,res,next){
  trello.getLists(function(){
    res.send(res.statusCode)
  })
})

router.get('/members/boards/:memberId', function(req,res,next){
    trello.addTeamMemberToBoard(req.params.memberId, function(){
      res.send(res.statusCode)
    })
})

router.get('/members/cards/:memberId/:cardId', function(req,res, next){
    trello.addTeamMemberToCard(req.params.cardId, req.params.memberId, function(){
      res.send(res.statusCode)
    })
})

router.get('/cards/:cardId', function(req,res,next){
    trello.deleteCard(req.params.cardId, function(){
      res.send(res.statusCode)
    })
})

router.get('/cardname/:cardId/:name', function(req, res, next){
    trello.updateCardName(req.params.cardId, req.params.name, function(){
      res.send(res.statusCode)
    })
})

router.get('/listname/:listId/:name', function(req, res, next){
    trello.updateListName(req.params.listId, req.params.name, function(){
      res.send(res.statusCode)
    })
})

router.get('/duedate/:cardId/:date', function(req,res, next){
    trello.addDueDateToCard(req.params.cardId, req.params.date, function(){
      res.send(res.statusCode)
    })
})
module.exports = router;
