var handler = {};
var em = require('./EventsDB.js').eventsLib;

handler.addRecord = function (req,res){
	var result = em.addEvent(req.body,res);
};
handler.deleteRecord = function(req,res){
    var result = em.deleteEvent(req.body.eventName,res);
};
handler.deleteParticipant = function(req,res){
	var result = em.deleteParticipant(req.body,res);
}
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
handler.updateParticipant = function(req,res){
	var updatedParticipant = {};
	var fields = Object.keys(req.body);
	fields.forEach(function(field){
		if(req.body[field] && req.body[field] != "")
			updatedParticipant[field] = req.body[field];
	});
	var result = em.updateParticipant(updatedParticipant,res);
};
handler.searchEvent = function(req,res){
	var searchBy;
	if(req.body.searchBy=="organizer")
		searchBy = 'organizer='+'"'+req.body.searchValue+'"';
	if(req.body.searchBy=="date")
		searchBy = 'date='+'"'+req.body.searchValue+'"';
	searchBy = 'eventName='+'"'+req.body.searchValue+'"';
	if(req.body.location && req.body.location!='')
		searchBy = searchBy+' && location="'+req.body.location+'"';
	var result = em.searchEvent(searchBy,res);
};
handler.searchParticipant = function(req,res){
	var searchParticipant = {};
	var searchBy = 'eventName="'+req.body.eventName+'"';
	if(req.body.name && req.body.name!='')
		searchBy = searchBy+' && name="'+req.body.name+'"';
	var result = em.searchParticipant(searchBy,res);
};
exports.handler = handler;