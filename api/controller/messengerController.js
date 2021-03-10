var  sendmodel = require('../model/messengerModel');
var path = require('path')
var formidable = require('formidable');
var fs = require('fs');


module.exports = {
    send: function (req, res,next) {
        var message =  req.body.message;
        var sender =JSON.stringify(req.body.sender) ;
        var receiver = JSON.stringify(req.body.receiver) ;
        var created= req.body.createdOn;
        sendmodel.sender(message,sender,receiver,created,function (data) {
            res.send(data);

        });
   
    },

    getMessageByUserId: function (req, res) {
        var userId = req.param('id');
        console.log(userId)
        sendmodel.findById(function (data) {
            //console.log(data)
            const filteredMessages = data.map(message=>{
                return {...message,sender:JSON.parse(message.sender), receiver: JSON.parse(message.receiver)}
            }).filter(message=>{
                return(message.sender.id==userId) || (message.receiver.id==userId);
            })

            res.send(filteredMessages)
        })
    },


}



