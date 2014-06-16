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
handler.updateEvent = function(req,res){
	var updatedEvent = {};
	var fields = Object.keys(req.body);
	fields.forEach(function(field){
		if(req.body[field] && req.body[field] != "")
			updatedEvent[field] = req.body[field];
	});
	var result = em.updateEvent(updatedEvent,res);
};
exports.handler = handler;