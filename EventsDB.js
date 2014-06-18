var mysql = require('mysql');
var eventsLib = {};
exports.eventsLib = eventsLib;

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '12345',
	database : 'test',
});

eventsLib.addEvent = function (event,res) {
	delete event.submit;
	var result = {};
	var insertEvent = 'insert into Events set ?';
	connection.query(insertEvent,event,function(err,records){
		if(err) result.message = "Cannot add event .Event already exists..";
		res.render('list');
	});
};

eventsLib.deleteEvent = function (eventName,res){
	var result = {};
	var removeEvent = 'delete from Events where eventName = ?';
	connection.query(removeEvent,eventName,function(err,records){
		if(err) result.message = "Cannot delete event .Event does't exists..";
		res.render('list');
	});
};

eventsLib.deleteParticipant = function(participant,res){
	var result = {};
	var deleteParticipantQuery = 'delete from Participants where eventName='+'"'+participant.eventName+'" && name="'+participant.name+'"';
	connection.query(deleteParticipantQuery,function(err,records){
		if(err) result.message = "Cannot delete participant. Participant does not exists..";
		res.render('list');
	});
};

eventsLib.addParticipant = function (participant,res){
	delete participant.submit;
	var result = {};
	var insertParticipant = 'insert into Participants set ?';
	connection.query(insertParticipant,participant,function(err,records){
		if(err) result.message = "Cannot add Participant..";
		res.render('list');
	});
};

eventsLib.updateEvent = function(event,res){
	delete event.submit;
	var result = {};
	var eventToUpdate = 'update Events set ? where eventName="'+event.eventName+'"';
	connection.query(eventToUpdate,event,function(err,records){
		if(err) result.message = "Could not update event..";
		res.render('list');
	});
};
eventsLib.updateParticipant = function(event,res){
	delete event.submit;
	var result = {};
	var eventToUpdate = 'update Participants set ? where eventName="'+event.eventName+'"';
	connection.query(eventToUpdate,event,function(err,records){
		if(err) result.message = "Could not update participant..";
		res.render('list');
	});
};
eventsLib.searchEvent = function(event,searchBy,res){
	var result = {};
	var searchQuery = 'select * from Events where '+searchBy;
	connection.query(searchQuery,event,function(err,records){
		if(err) result.message = "no records found";
		res.render('list');
	});
};
eventsLib.searchParticipant = function(participant,res){
	var result = {};
	var searchQuery = 'select * from Participants where name="'+participant.name+'" && eventName="'+participant.eventName+'"';
	connection.query(searchQuery,function(err,records){
		if(err) result.message = "no records found";
		res.render('list');
	});
};