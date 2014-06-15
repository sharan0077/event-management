var handler = {};
var em = require('./EventsLibrary.js');

handler.addRecord = function (req,res){
	var result = em.addDetails(req.body);
    res.render('list');
};
handler.deleteRecord = function(req,res){
    var result = em.deleteDetails(req.body.eventId);
    res.render('list');
};
handler.addParticipant = function(req,res){
    var result = em.addParticipant(req.body);
    res.render('list');
};
exports.handler = handler;