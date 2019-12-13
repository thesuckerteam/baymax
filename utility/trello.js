var Trello = require('trello');

var trello = new Trello('31d325be1f01a6fc44dc51db6dc63f88', '6d80a3eded49d7a88b16efc5b601745b88a48637159651f6885afc01bf0dde5d');

exports.addCardTODO = function(name, desc, callback){

    trello.addCard(name, desc, '5df342eb9a2497638c2e7d22',
        function (error, trelloCard) {
            if (error) {
                console.log(error)
            } else {
                console.log('Added card: ' + trelloCard)
                callback()
            }
        })
}

exports.addCardDOING = function(name, desc, callback){
    trello.addCard(name, desc, '5df342eb9a2497638c2e7d23',
    function(error, trelloCard){
        if (error) console.log(error)
        else console.log('Added card : ' + trelloCard)
        callback()
    })
}

exports.addCardDONE = function(name, desc, callback){
    trello.addCard(name, desc, '5df342eb9a2497638c2e7d24',
    function(error, trelloCard){
        if (error) console.log(error)
        else console.log('Added card : ' + trelloCard)
        callback()
    })
}

exports.deleteCard = function(cardId, callback){
    trello.deleteCard(cardId, function(error, result){
        if (error) console.log(error)
        else console.log('deleted card: ' + result)
        callback()
    })
}

exports.updateCardName = function(cardId, name, callback){
    trello.updateCardName(cardId, name, function(error, result){
        if (error) console.log(error)
        else console.log('Updated card: ' + result)
        callback()
    })
}

exports.updateListName = function(listId, name, callback){
    trello.renameList(listId, name, function(error, result){
        if (error) console.log(error)
        else console.log('Updated list name: ' + result)
        callback()
    })
}

exports.getBoards = function(callback) {

    trello.getBoards('5dd79b7456259d09ca4fac1a', function(error, result){
        if (error) console.log(error)
        else console.log(result)
        callback()
    })
}

exports.addList = function(name, callback){
    trello.addListToBoard('5df342eb9a2497638c2e7d21', name, function(error, result){
        if (error) console.log('Error: ' + error)
        else console.log('Added list: ' + result)
        callback()
    })
}
exports.getLists = function(callback){
trello.getListsOnBoard('5df342eb9a2497638c2e7d21', function(error,result){
    if (error) console.log('error : ' + error)
    else console.log(result)
    callback()
})
}
