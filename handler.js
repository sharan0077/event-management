var handler = {};
var em = require('./EventsDB.js').eventsLib;

handler.addRecord = function (req,res){
	var result = em.addEvent(req.body,res);
};
handler.deleteRecord = function(req,res){
    var result = em.deleteEvent(req.body.eventName,res);
};
handler.addParticipant = function(req,res){
    var result = em.addParticipant(req.body,res);
};
exports.handler = handler;